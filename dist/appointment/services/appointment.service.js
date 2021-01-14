"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const email_service_1 = require("./../../email/email.service");
const provider_service_1 = require("./../../doctor/services/provider.service");
const notification_service_1 = require("./../../notification/services/notification.service");
const sequelize_typescript_1 = require("sequelize-typescript");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../../users/models/user.model");
const appointment_model_1 = require("../../shared/models/appointment.model");
const appointment_details_model_1 = require("../../shared/models/appointment-details.model");
const list_query_params_dto_1 = require("../../core/common/list-query-params.dto");
const provider_model_1 = require("../../doctor/models/provider.model");
const provider_availability_slot_model_1 = require("../../doctor/models/provider-availability-slot.model");
const patient_model_1 = require("../../patient/models/patient.model");
const users_service_1 = require("../../users/services/users.service");
const sequelize_2 = require("sequelize");
const zoom_service_1 = require("../../zoom/services/zoom.service");
const attachments_model_1 = require("../../shared/models/attachments.model");
let AppointmentService = class AppointmentService {
    constructor(appointmentModel, appointmentDetailsModel, attachmentsModel, providerAvailabilitySlotModel, sequelize, usersService, providerService, emailService, zoomService, notificationService) {
        this.appointmentModel = appointmentModel;
        this.appointmentDetailsModel = appointmentDetailsModel;
        this.attachmentsModel = attachmentsModel;
        this.providerAvailabilitySlotModel = providerAvailabilitySlotModel;
        this.sequelize = sequelize;
        this.usersService = usersService;
        this.providerService = providerService;
        this.emailService = emailService;
        this.zoomService = zoomService;
        this.notificationService = notificationService;
    }
    async getAppointmentDeatils(appId) {
        console.log(appId);
        try {
            const result = await this.appointmentModel.findOne({
                include: [
                    appointment_details_model_1.AppointmentDetails,
                    attachments_model_1.Attachments
                ],
                where: {
                    id: appId
                }
            });
            return result;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getAppointmentByDate(data) {
        try {
            const result = await this.appointmentModel.findAll({
                where: {
                    patientId: data.patientId,
                    createdAt: {
                        [sequelize_2.Op.gte]: data.date
                    }
                }
            });
            return result;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async saveAppointment(appointmentData) {
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            const result = await this.appointmentModel.findOne({
                where: {
                    providerId: appointmentData.providerId,
                    patientId: appointmentData.patientId,
                    start: appointmentData.start,
                    end: appointmentData.end,
                    type: appointmentData.type,
                    date: appointmentData.date
                },
                transaction: transaction
            });
            if (!result || appointmentData.type == 'I') {
                const startTime = appointmentData.date + 'T' + '10:30';
                const meetingInput = {
                    topic: this.usersService.getLoggedinUserName(),
                    startTime: startTime,
                    duration: 30
                };
                const meetingData = await this.zoomService.createMeeting(meetingInput);
                const appointment = await this.appointmentModel.create({
                    providerId: appointmentData.providerId,
                    patientId: appointmentData.patientId,
                    date: appointmentData.date,
                    start: appointmentData.start,
                    end: appointmentData.end,
                    type: appointmentData.type,
                    status: appointmentData.status || 'PENDING',
                    meetingId: meetingData.id,
                    joinUrl: meetingData.join_url,
                    startUrl: meetingData.start_url
                }, { transaction: transaction });
                appointmentData.meetingId = meetingData.id;
                if (appointment) {
                    appointmentData.appointmentId = appointment.id;
                    await this.appointmentDetailsModel.create({
                        appointmentId: appointment.id,
                        appointmentType: appointmentData.appointmentType,
                        subject: appointmentData.subject,
                        message: appointmentData.message,
                        files: appointmentData.files
                    }, { transaction: transaction });
                    if (appointmentData.fileType) {
                        await this.attachmentsModel.create({
                            appointmentId: appointment.id,
                            type: appointmentData.fileType,
                            fileName: appointmentData.fileName,
                            fileUrl: appointmentData.files,
                            uploadedBy: appointmentData.uploadedBy
                        }, { transaction: transaction });
                    }
                    const providerDetails = await this.providerService.getProviderById(appointmentData.providerId);
                    const mailData = {
                        name: (await providerDetails).user.firstName,
                        email: (await providerDetails).user.email,
                    };
                    await this.emailService.sendAppointmentMail(mailData);
                }
            }
            else {
                const data = {
                    providerId: appointmentData.providerId,
                    patientId: appointmentData.patientId,
                    date: appointmentData.date,
                    start: appointmentData.start,
                    end: appointmentData.end,
                    type: appointmentData.type,
                    status: result.status
                };
                if (appointmentData.status) {
                    data.status = appointmentData.status;
                }
                appointmentData.meetingId = result.meetingId;
                appointmentData.appointmentId = result.id;
                await this.appointmentModel.update({
                    providerId: appointmentData.providerId,
                    patientId: appointmentData.patientId,
                    start: appointmentData.start,
                    end: appointmentData.end,
                    type: appointmentData.type,
                    status: appointmentData.status || 'PENDING'
                }, {
                    where: { id: result.id },
                    transaction
                });
                await this.appointmentDetailsModel.update({
                    appointmentId: result.id,
                    appointmentType: appointmentData.appointmentType,
                    subject: appointmentData.subject,
                    message: appointmentData.message,
                    files: appointmentData.files
                }, { where: { appointmentId: result.id }, transaction });
            }
            if (appointmentData.type == 'I') {
                const provider = await this.usersService.finProvider({ id: appointmentData.providerId });
                const notificationData = {
                    appointmentId: appointmentData.appointmentId,
                    userId: provider.userId,
                    status: false
                };
                await this.notificationService.saveNotifications(notificationData, transaction);
            }
            await transaction.commit();
            return appointmentData;
        }
        catch (error) {
            console.log(error);
            if (transaction)
                await transaction.rollback();
            return null;
        }
    }
    async addAttachments(attachmentData) {
        const result = await this.attachmentsModel.create({
            appointmentId: attachmentData.appointmentId,
            type: attachmentData.type,
            fileName: attachmentData.fileName,
            fileUrl: attachmentData.fileUrl,
            uploadedBy: attachmentData.uploadedBy
        });
        return result;
    }
    async getAttachments(queryParams) {
        const searchText = queryParams.queryString || '';
        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';
        const where = {
            [sequelize_2.Op.or]: [
                {
                    fileName: { [sequelize_2.Op.like]: '%' + searchText + '%' }
                }
            ]
        };
        if (queryParams.filter) {
            if (queryParams.filter.type) {
                where.type = queryParams.filter.type;
            }
        }
        if (this.usersService.isAdmin()) {
            if (queryParams.filter) {
                if (queryParams.filter.userId) {
                    where.uploadedBy = queryParams.filter.userId;
                }
            }
        }
        else {
            where.uploadedBy = this.usersService.getLoggedinUserId();
        }
        console.log(where);
        const result = await this.attachmentsModel.findAll({
            include: [
                {
                    model: appointment_model_1.Appointment,
                    required: false,
                    include: [
                        {
                            model: patient_model_1.Patient,
                            required: false,
                            include: [
                                {
                                    model: user_model_1.User,
                                    attributes: ['id', 'firstName', 'lastName', 'picture', 'phone'],
                                    where: {
                                        [sequelize_2.Op.or]: [
                                            {
                                                firstName: { [sequelize_2.Op.like]: '%' + searchText + '%' }
                                            },
                                            {
                                                lastName: { [sequelize_2.Op.like]: '%' + searchText + '%' }
                                            }
                                        ]
                                    },
                                }
                            ]
                        },
                        {
                            model: provider_model_1.Provider,
                            required: false,
                            include: [
                                {
                                    model: user_model_1.User,
                                    attributes: ['id', 'firstName', 'lastName', 'picture', 'phone'],
                                    where: {
                                        [sequelize_2.Op.or]: [
                                            {
                                                firstName: { [sequelize_2.Op.like]: '%' + searchText + '%' }
                                            },
                                            {
                                                lastName: { [sequelize_2.Op.like]: '%' + searchText + '%' }
                                            }
                                        ]
                                    },
                                }
                            ]
                        }
                    ]
                }
            ],
            where: where,
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
        return result;
    }
    async getAppointments(queryParams) {
        const searchText = queryParams.queryString || '';
        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';
        const where = {};
        if (queryParams.filter) {
            if (queryParams.filter.date) {
                where.date = queryParams.filter.date;
            }
        }
        if (this.usersService.isAdmin()) {
            if (queryParams.filter) {
                if (queryParams.filter.providerId) {
                    where.providerId = queryParams.filter.providerId;
                }
                if (queryParams.filter.patientId) {
                    where.patientId = queryParams.filter.patientId;
                }
            }
        }
        else if (this.usersService.isProvider()) {
            where.providerId = this.usersService.getLoggedinProviderId();
        }
        else if (this.usersService.isPatient()) {
            where.patientId = this.usersService.getLoggedinPatientId();
        }
        console.log(where, this.usersService.getLoggedinUserData());
        if (this.usersService.isProvider()) {
            return await this.appointmentModel.findAndCountAll({
                distinct: true,
                include: [
                    {
                        model: patient_model_1.Patient,
                        include: [
                            {
                                model: user_model_1.User,
                                attributes: ['id', 'firstName', 'lastName', 'picture', 'phone'],
                                where: {
                                    [sequelize_2.Op.or]: [
                                        {
                                            firstName: { [sequelize_2.Op.like]: '%' + searchText + '%' }
                                        },
                                        {
                                            lastName: { [sequelize_2.Op.like]: '%' + searchText + '%' }
                                        }
                                    ]
                                },
                            }
                        ],
                        required: true
                    },
                    attachments_model_1.Attachments
                ],
                where: where,
                offset: offset,
                limit: limit,
                order: [[sortField, sortOrder]]
            });
        }
        if (this.usersService.isPatient()) {
            return await this.appointmentModel.findAndCountAll({
                distinct: true,
                include: [
                    {
                        model: provider_model_1.Provider,
                        include: [
                            {
                                model: user_model_1.User,
                                attributes: ['id', 'firstName', 'lastName', 'picture', 'phone'],
                                where: {
                                    [sequelize_2.Op.or]: [
                                        {
                                            firstName: { [sequelize_2.Op.like]: '%' + searchText + '%' }
                                        },
                                        {
                                            lastName: { [sequelize_2.Op.like]: '%' + searchText + '%' }
                                        }
                                    ]
                                },
                            },
                        ],
                        required: true
                    },
                    provider_availability_slot_model_1.ProviderAvailabilitySlot,
                    attachments_model_1.Attachments
                ],
                where: where,
                offset: offset,
                limit: limit,
                order: [[sortField, sortOrder]]
            });
        }
    }
    async updateAppointmentStatus(data) {
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            await this.appointmentModel.update({
                status: data.status || 'PENDING'
            }, {
                where: { id: data.appointmentId },
                transaction
            });
            const result = await this.appointmentModel.findOne({
                where: { id: data.appointmentId },
                transaction: transaction
            });
            await transaction.commit();
            return result;
        }
        catch (error) {
            console.log(error);
            if (transaction)
                await transaction.rollback();
            return null;
        }
    }
    async deleteFile(fileId) {
        return await this.attachmentsModel.destroy({
            where: {
                id: fileId
            }
        });
    }
    async getAppointmentsListByDate(date) {
        try {
            const where = {
                date: date
            };
            const includes = [];
            if (this.usersService.isAdmin()) {
            }
            else if (this.usersService.isProvider()) {
                where.providerId = this.usersService.getLoggedinProviderId();
                includes.push({
                    model: patient_model_1.Patient,
                    attributes: ['id'],
                    include: [user_model_1.User],
                    required: false
                });
                includes.push({
                    model: provider_availability_slot_model_1.ProviderAvailabilitySlot
                });
            }
            else if (this.usersService.isPatient()) {
                where.patientId = this.usersService.getLoggedinPatientId();
            }
            console.log(where);
            const result = await this.appointmentModel.findAll({
                where: where,
                include: includes
            });
            return result;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
};
AppointmentService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(appointment_model_1.Appointment)),
    __param(1, sequelize_1.InjectModel(appointment_details_model_1.AppointmentDetails)),
    __param(2, sequelize_1.InjectModel(attachments_model_1.Attachments)),
    __param(3, sequelize_1.InjectModel(provider_availability_slot_model_1.ProviderAvailabilitySlot)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, sequelize_typescript_1.Sequelize,
        users_service_1.UsersService,
        provider_service_1.ProviderService,
        email_service_1.EmailService,
        zoom_service_1.ZoomService,
        notification_service_1.NotificationService])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map