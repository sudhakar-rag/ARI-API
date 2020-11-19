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
exports.PatientService = void 0;
const patient_subscription_model_1 = require("./../models/patient-subscription.model");
const patient_model_1 = require("./../models/patient.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const sequelize_2 = require("@nestjs/sequelize");
const user_create_service_1 = require("../../users/services/user-create.service");
const patient_medical_problems_model_1 = require("../models/patient-medical-problems.model");
const patient_provider_type_model_1 = require("../models/patient-provider-type.model");
const patient_specalist_model_1 = require("../models/patient-specalist.model");
const patient_symptom_model_1 = require("../models/patient-symptom.model");
const user_model_1 = require("../../users/models/user.model");
const patient_address_model_1 = require("../models/patient-address.model");
const appointment_model_1 = require("../../shared/models/appointment.model");
const appointment_details_model_1 = require("../../shared/models/appointment-details.model");
const list_query_params_dto_1 = require("../../core/common/list-query-params.dto");
const provider_model_1 = require("../../doctor/models/provider.model");
const provider_availability_slot_model_1 = require("../../doctor/models/provider-availability-slot.model");
const address_model_1 = require("../../users/models/address.model");
let PatientService = class PatientService {
    constructor(userModel, patientModel, appointmentModel, appointmentDetailsModel, userCreateService, sequelize) {
        this.userModel = userModel;
        this.patientModel = patientModel;
        this.appointmentModel = appointmentModel;
        this.appointmentDetailsModel = appointmentDetailsModel;
        this.userCreateService = userCreateService;
        this.sequelize = sequelize;
    }
    async getPatients(queryParams) {
        const searchText = queryParams.queryString || '';
        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';
        const where = {};
        const serviceWhere = {};
        const specialitiesWhere = {};
        if (queryParams.filter) {
            if (queryParams.filter.gender) {
                where['gender'] = queryParams.filter.gender;
            }
            if (typeof queryParams.filter.isAvailable == 'boolean') {
                where['isAvailable'] = queryParams.filter.isAvailable ? 1 : 0;
            }
        }
        return await this.patientModel.findAndCountAll({
            distinct: true,
            include: [
                {
                    model: user_model_1.User,
                    where: {
                        [sequelize_1.Op.or]: [
                            {
                                firstName: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                            },
                            {
                                lastName: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                            }
                        ]
                    },
                },
                {
                    model: patient_address_model_1.PatientAddress,
                    include: [address_model_1.Address]
                }
            ],
            where: where,
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
    }
    async getPatientById(patientId) {
        return await this.patientModel.findOne({
            where: { id: patientId },
            include: [
                user_model_1.User,
                {
                    model: patient_address_model_1.PatientAddress,
                    include: [address_model_1.Address],
                    required: false
                },
                {
                    model: patient_medical_problems_model_1.PatientMedicalProblem,
                    required: false
                },
                {
                    model: patient_provider_type_model_1.PatientProviderType,
                    required: false
                },
                {
                    model: patient_specalist_model_1.PatientSpecalist,
                    required: false
                },
                {
                    model: patient_symptom_model_1.PatientSymptom,
                    required: false
                },
                {
                    model: patient_subscription_model_1.PatientSubscription,
                    required: false
                }
            ]
        });
    }
    async createPatient(patientData) {
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            let action = 'C';
            if (patientData.id) {
                action = 'E';
            }
            const userData = {
                userName: patientData.email,
                password: '123456',
                firstName: patientData.firstName,
                lastName: patientData.lastName,
                email: patientData.email,
                phone: patientData.phone,
                picture: patientData.picture,
                status: 1
            };
            const user = await this.userCreateService.saveUser(userData, action, transaction);
            await transaction.commit();
            return user;
        }
        catch (error) {
            console.log(error);
            if (transaction)
                await transaction.rollback();
            return null;
        }
    }
    async deletePatient(id) {
        return await this.patientModel.destroy({ where: { id: id } });
    }
    async saveAppointment(appointmentData) {
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            const result = await this.appointmentModel.findOne({
                where: {
                    providerId: appointmentData.providerId,
                    patientId: appointmentData.patientId,
                    slotId: appointmentData.slotId,
                    type: appointmentData.type
                },
                transaction: transaction
            });
            if (!result) {
                const appointment = await this.appointmentModel.create({
                    providerId: appointmentData.providerId,
                    patientId: appointmentData.patientId,
                    date: appointmentData.date,
                    slotId: appointmentData.slotId,
                    type: appointmentData.type,
                    status: appointmentData.status || 'PENDING'
                }, { transaction: transaction });
                if (appointment) {
                    await this.appointmentDetailsModel.create({
                        appointmentId: appointment.id,
                        appointmentType: appointmentData.appointmentType,
                        subject: appointmentData.subject,
                        message: appointmentData.message,
                        files: appointmentData.files
                    }, { transaction: transaction });
                }
            }
            else {
                const data = {
                    providerId: appointmentData.providerId,
                    patientId: appointmentData.patientId,
                    date: appointmentData.date,
                    slotId: appointmentData.slotId,
                    type: appointmentData.type,
                    status: result.status
                };
                if (appointmentData.status) {
                    data.status = appointmentData.status;
                }
                await this.appointmentModel.update({
                    providerId: appointmentData.providerId,
                    patientId: appointmentData.patientId,
                    slotId: appointmentData.slotId,
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
    async getAppointments(queryParams) {
        const searchText = queryParams.queryString || '';
        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';
        let patientId = '0';
        if (queryParams.filter && queryParams.filter.patientId) {
            patientId = queryParams.filter.patientId;
        }
        console.log('patientId', patientId, queryParams);
        return await this.appointmentModel.findAndCountAll({
            include: [
                {
                    model: provider_model_1.Provider,
                    include: [user_model_1.User]
                },
                {
                    model: patient_model_1.Patient,
                    include: [user_model_1.User]
                },
                provider_availability_slot_model_1.ProviderAvailabilitySlot
            ],
            where: { patientId: patientId },
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
    }
};
PatientService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_2.InjectModel(user_model_1.User)),
    __param(1, sequelize_2.InjectModel(patient_model_1.Patient)),
    __param(2, sequelize_2.InjectModel(appointment_model_1.Appointment)),
    __param(3, sequelize_2.InjectModel(appointment_details_model_1.AppointmentDetails)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, user_create_service_1.UserCreateService,
        sequelize_typescript_1.Sequelize])
], PatientService);
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map