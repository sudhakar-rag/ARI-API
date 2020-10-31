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

@Injectable()
export class AppointmentService {
    constructor(
        @InjectModel(Appointment)
        private readonly appointmentModel: typeof Appointment,
        @InjectModel(AppointmentDetails)
        private readonly appointmentDetailsModel: typeof AppointmentDetails,
        private readonly sequelize: Sequelize,
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

        let patientId = '0';
        if (queryParams.filter && queryParams.filter.patientId) {
            patientId = queryParams.filter.patientId
        }
        console.log('patientId', patientId, queryParams);

        return await this.appointmentModel.findAndCountAll({
            include: [
                {
                    model: Provider,
                    include: [User]
                },
                {
                    model: Patient,
                    include: [User]
                },
                ProviderAvailabilitySlot
            ],
            where: { patientId: patientId },
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
    }
}
