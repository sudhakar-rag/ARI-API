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
import { Address } from './../../users/models/address.model';
import { Subscription } from './../../shared/models/subscription.model';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient)
    private readonly patientModel: typeof Patient,
    private usersService: UserCreateService,
    private readonly sequelize: Sequelize,
  ) { }

  async getPatients(): Promise<any> {
    return await this.patientModel.findAll();
  }

  async getPatientById(userId: string): Promise<any> {
    return await this.patientModel.findAll({
      where: { userId: userId },
      include: [
        Address,
        Subscription,
        PatientMedicalProblem,
        PatientProviderType,
        PatientSpecalist,
        PatientSymptom,
      ]
    });
  }

  async createPatient(patientData: PatientDto): Promise<any> {
    let transaction;
    try {
      transaction = await this.sequelize.transaction();

      let user;
      let action = 'C';

      let userData = {
        firstName: patientData.firstName,
        lastName: patientData.lastName,
        userName: patientData.email,
        email: patientData.email,
        password: patientData.password,
        phone: patientData.phone,
        status: 1,
      };

      user = await this.usersService.saveUser(
        userData,
        (action = 'C'),
        transaction,
        3
      );

      patientData.id = user.id;

      // Patient BasicInfo
      await this.savePatient(patientData, action, transaction);

      await transaction.commit();

      return user;
    } catch (error) {
      console.log(error);
      if (transaction) await transaction.rollback();

      return null;
    }
  }

  async savePatient(patientData: PatientDto, action = 'C', transaction): Promise<any> {
    let providerBasicData = {
      userId: patientData.id,
      gender: patientData.gender,
      dateOfBirth: patientData.dateOfBirth,
      ethnicity: patientData.ethnicity
    };

    if (action == 'C') {
      await this.patientModel.create(providerBasicData, { transaction });
    }

    if (action == 'E') {
      await this.patientModel.update(providerBasicData, {
        where: { userId: patientData.id },
        transaction,
      });
    }
  }
  async deletePatient(id: number): Promise<any> {
    return await this.patientModel.destroy({ where: { id: id } });
  }
}
