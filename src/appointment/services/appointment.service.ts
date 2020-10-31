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
@Injectable()
export class AppointmentService {
    constructor(
        @InjectModel(Appointment)
        private readonly appointmentModel: typeof Appointment,
        @InjectModel(AppointmentDetails)
        private readonly appointmentDetailsModel: typeof AppointmentDetails,
        private readonly sequelize: Sequelize,
        private usersService: UsersService
    ) { }


    async getAppointmentDeatils(appId: string): Promise<Appointment> {
        console.log(appId);
        try {
            const result = await this.appointmentModel.findOne({
                include: [
                    AppointmentDetails,
                    ProviderAvailabilitySlot
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

    async saveAppointment(appointmentData: CreateAppointmentDto): Promise<any> {

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
            })

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
            } else {
                const data: any = {
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


            await transaction.commit();

            return appointmentData;
        } catch (error) {
            console.log(error);
            if (transaction) await transaction.rollback();

            return null;
        }
    }


    async getAppointments(queryParams: ListQueryParamsDto): Promise<any> {

        const searchText = queryParams.queryString || '';

        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';

        let where: any = {};
        if (this.usersService.isAdmin()) {
            if (queryParams.filter) {
                if (queryParams.filter.providerId) {
                    where = { providerId: queryParams.filter.providerId };
                }

                if (queryParams.filter.patientId) {
                    where = { patientId: queryParams.filter.patientId };
                }
            }
        } else if (this.usersService.isProvider()) {
            where = { providerId: this.usersService.getLoggedinProviderId() };
        } else if (this.usersService.isPatient()) {
            where = { patientId: this.usersService.getLoggedinPatientId() };
        }
        console.log(where, this.usersService.getLoggedinUserData());

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
                        }
                    ]
                },
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
                    ]
                },
                ProviderAvailabilitySlot
            ],
            where: where,
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
    }
}