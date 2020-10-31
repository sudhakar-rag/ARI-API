import { RatingHistory } from './../../doctor/models/rating-history';
import { PatientDto } from './../dto/patient.dto';
import { Patient } from './../models/patient.model';
import { Sequelize } from 'sequelize-typescript';

import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreateService } from '@app/src/users/services/user-create.service';
import { PatientMedicalProblem } from '../models/patient-medical-problems.model';
import { PatientProviderType } from '../models/patient-provider-type.model';
import { PatientSpecalist } from '../models/patient-specalist.model';
import { PatientSymptom } from '../models/patient-symptom.model';
import { Subscription } from './../../shared/models/subscription.model';
import { User } from '@app/src/users/models/user.model';
import { PatientAddress } from '../models/patient-address.model';
import { CreateAppointmentDto } from '../../appointment/dto/create-appointment.dto';
import { Appointment } from '@app/src/shared/models/appointment.model';
import { AppointmentDetails } from '@app/src/shared/models/appointment-details.model';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
import { Provider } from '@app/src/doctor/models/provider.model';
import { ProviderAvailabilitySlot } from '@app/src/doctor/models/provider-availability-slot.model';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(Patient)
    private readonly patientModel: typeof Patient,
    @InjectModel(Appointment)
    private readonly appointmentModel: typeof Appointment,
    @InjectModel(AppointmentDetails)
    private readonly appointmentDetailsModel: typeof AppointmentDetails,
    private userCreateService: UserCreateService,
    private readonly sequelize: Sequelize,
  ) { }

  async getPatients(queryParams: any): Promise<any> {
    return await this.patientModel.findAll({
      include: [
        User,
        PatientAddress,
        PatientMedicalProblem,
        PatientSymptom
      ]
    });
  }

  async getPatientById(patientId: string): Promise<any> {
    return await this.patientModel.findAll({
      where: { id: patientId },
      include: [
        User,
        PatientAddress,
        Subscription,
        PatientMedicalProblem,
        PatientProviderType,
        PatientSpecalist,
        PatientSymptom,
        RatingHistory
      ]
    });
  }

  async createPatient(patientData: PatientDto): Promise<any> {
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
      }

      const user = await this.userCreateService.saveUser(userData, action, transaction);

      await transaction.commit();

      return user;
    } catch (error) {
      console.log(error);
      if (transaction) await transaction.rollback();

      return null;
    }
  }


  async deletePatient(id: number): Promise<any> {
    return await this.patientModel.destroy({ where: { id: id } });
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
