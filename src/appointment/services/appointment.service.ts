import { EmailService } from './../../email/email.service';
import { ProviderService } from './../../doctor/services/provider.service';
import { CreateNotificationDto } from './../../notification/dto/create-notification.dto';
import { NotificationService } from './../../notification/services/notification.service';
import { CreateAttachmentDto } from './../dto/create-attachment.dto';
import { Sequelize } from 'sequelize-typescript';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '@app/src/users/models/user.model';
import { CreateAppointmentDto } from '../../appointment/dto/create-appointment.dto';
import { Appointment } from '@app/src/shared/models/appointment.model';
import { AppointmentDetails } from '@app/src/shared/models/appointment-details.model';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
import { Provider } from '@app/src/doctor/models/provider.model';
import { ProviderAvailabilitySlot } from '@app/src/doctor/models/provider-availability-slot.model';
import { Patient } from '@app/src/patient/models/patient.model';
import { UsersService } from '@app/src/users/services/users.service';
import { Op } from 'sequelize';
import { ZoomService } from '@app/src/zoom/services/zoom.service';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { Attachments } from '@app/src/shared/models/attachments.model';
@Injectable()
export class AppointmentService {
    constructor(
        @InjectModel(Appointment)
        private readonly appointmentModel: typeof Appointment,
        @InjectModel(AppointmentDetails)
        private readonly appointmentDetailsModel: typeof AppointmentDetails,
        @InjectModel(Attachments)
        private readonly attachmentsModel: typeof Attachments,
        @InjectModel(ProviderAvailabilitySlot)
        private readonly providerAvailabilitySlotModel: typeof ProviderAvailabilitySlot,
        private readonly sequelize: Sequelize,
        private usersService: UsersService,
        private providerService: ProviderService,
        private emailService: EmailService,
        private zoomService: ZoomService,
        private notificationService: NotificationService
    ) { }


    async getAppointmentDeatils(appId: string): Promise<Appointment> {
        console.log(appId);
        try {
            const result = await this.appointmentModel.findOne({
                include: [
                    AppointmentDetails,
                    // ProviderAvailabilitySlot,
                    Attachments
                ],
                where: {
                    id: appId
                }
            });

            return result;
        } catch (error) {
            console.log(error);

            return null;
        }
    }

    async getAppointmentByDate(data: { patientId: number, date: Date }): Promise<Appointment[]> {
        try {
            const result = await this.appointmentModel.findAll({

                where: {
                    patientId: data.patientId,
                    createdAt: {
                        [Op.gte]: data.date
                    }
                }

            });

            return result;
        } catch (error) {
            console.log(error);

            return null;
        }
    }

    async saveAppointment(appointmentData: CreateAppointmentDto): Promise<any> {

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
            })

            if (!result || appointmentData.type == 'I') {
                // const slot = await this.providerAvailabilitySlotModel.findOne({ where: { id: appointmentData.slotId } });
                const startTime = appointmentData.date + 'T' + appointmentData.start;
                const meetingInput = {
                    topic: this.usersService.getLoggedinUserName(),
                    startTime: startTime,
                    duration: 30
                }

                const meetingData: any = await this.zoomService.createMeeting(meetingInput);

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
            } else {
                const data: any = {
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

                await this.appointmentDetailsModel.update(
                    {
                        appointmentId: result.id,
                        appointmentType: appointmentData.appointmentType,
                        subject: appointmentData.subject,
                        message: appointmentData.message,
                        files: appointmentData.files
                    },
                    { where: { appointmentId: result.id }, transaction });
            }

            if (appointmentData.type == 'I') {
                const provider = await this.usersService.finProvider({ id: appointmentData.providerId });
                const notificationData: CreateNotificationDto = {
                    appointmentId: appointmentData.appointmentId,
                    userId: provider.userId,
                    message: 'You have OnDemand eVisit call with <b>' + this.usersService.getLoggedinUserName() + '</b>.',
                    status: false
                };

                await this.notificationService.saveNotifications(notificationData, transaction);
            }

            await transaction.commit();

            return appointmentData;

        } catch (error) {
            console.log(error);
            if (transaction) await transaction.rollback();

            return null;
        }
    }

    async addAttachments(attachmentData: CreateAttachmentDto): Promise<any> {

        const result = await this.attachmentsModel.create({
            appointmentId: attachmentData.appointmentId,
            type: attachmentData.type,
            fileName: attachmentData.fileName,
            fileUrl: attachmentData.fileUrl,
            uploadedBy: attachmentData.uploadedBy
        });

        return result;

    }


    async getAttachments(queryParams: ListQueryParamsDto): Promise<any> {

        const searchText = queryParams.queryString || '';

        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';

        const where: any = {
            [Op.or]: [
                {
                    fileName: { [Op.like]: '%' + searchText + '%' }
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
        } else {
            where.uploadedBy = this.usersService.getLoggedinUserId()
        }
        console.log(where);

        const result = await this.attachmentsModel.findAll(
            {

                include: [
                    {
                        model: Appointment,
                        required: false,
                        include: [
                            {
                                model: Patient,
                                required: false,
                                include: [
                                    {
                                        model: User,
                                        attributes: ['id', 'firstName', 'lastName', 'picture', 'phone'],
                                        where: {
                                            [Op.or]: [
                                                {
                                                    firstName: { [Op.like]: '%' + searchText + '%' }
                                                },
                                                {
                                                    lastName: { [Op.like]: '%' + searchText + '%' }
                                                }
                                            ]
                                        },
                                    }
                                ]
                            },
                            {
                                model: Provider,
                                required: false,
                                include: [
                                    {
                                        model: User,
                                        attributes: ['id', 'firstName', 'lastName', 'picture', 'phone'],
                                        where: {
                                            [Op.or]: [
                                                {
                                                    firstName: { [Op.like]: '%' + searchText + '%' }
                                                },
                                                {
                                                    lastName: { [Op.like]: '%' + searchText + '%' }
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
            }
        );

        return result;

    }



    async getAppointments(queryParams: ListQueryParamsDto): Promise<any> {

        const searchText = queryParams.queryString || '';

        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';

        const where: any = {};

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
        } else if (this.usersService.isProvider()) {
            where.providerId = this.usersService.getLoggedinProviderId();
        } else if (this.usersService.isPatient()) {
            where.patientId = this.usersService.getLoggedinPatientId();
        }
        console.log(where, this.usersService.getLoggedinUserData());


        if (this.usersService.isProvider()) {
            return await this.appointmentModel.findAndCountAll({
                distinct: true,
                include: [
                    {
                        model: Patient,
                        include: [
                            {
                                model: User,
                                attributes: ['id', 'firstName', 'lastName', 'picture', 'phone'],
                                where: {
                                    [Op.or]: [
                                        {
                                            firstName: { [Op.like]: '%' + searchText + '%' }
                                        },
                                        {
                                            lastName: { [Op.like]: '%' + searchText + '%' }
                                        }
                                    ]
                                },
                            }
                        ],
                        required: true
                    },
                    // ProviderAvailabilitySlot,
                    Attachments
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
                        model: Provider,
                        include: [
                            {
                                model: User,
                                attributes: ['id', 'firstName', 'lastName', 'picture', 'phone'],
                                where: {
                                    [Op.or]: [
                                        {
                                            firstName: { [Op.like]: '%' + searchText + '%' }
                                        },
                                        {
                                            lastName: { [Op.like]: '%' + searchText + '%' }
                                        }
                                    ]
                                },
                            },
                        ],
                        required: true
                    },
                    // ProviderAvailabilitySlot,
                    Attachments
                ],
                where: where,
                offset: offset,
                limit: limit,
                order: [[sortField, sortOrder]]
            });
        }
    }

    async updateAppointmentStatus(data: UpdateAppointmentDto): Promise<any> {

        try {


            await this.appointmentModel.update({
                status: data.status || 'PENDING'
            }, {
                where: { id: data.appointmentId }
            });

            const result = await this.appointmentModel.findOne({
                where: { id: data.appointmentId }
            })



            return result;
        } catch (error) {
            console.log(error);

            return null;
        }
    }


    async deleteFile(fileId: string): Promise<any> {
        return await this.attachmentsModel.destroy({
            where: {
                id: fileId
            }
        })
    }

    async getAppointmentsListByDate(date: string): Promise<Appointment[]> {
        try {

            const where: any = {
                date: {
                    [Op.gte]: date
                }
            }

            const includes = [];

            if (this.usersService.isAdmin()) {

            } else if (this.usersService.isProvider()) {
                where.providerId = this.usersService.getLoggedinProviderId();
                where.type = 'G';
                includes.push({
                    model: Patient,
                    attributes: ['id'],
                    include: [User],
                    required: false
                });
            } else if (this.usersService.isPatient()) {
                where.patientId = this.usersService.getLoggedinPatientId();
            }
            console.log(where);

            const result = await this.appointmentModel.findAll({
                where: where,
                include: includes
            });

            return result;
        } catch (error) {
            console.log(error);

            return null;
        }
    }
}
