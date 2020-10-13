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
import { User } from '@app/src/users/models/user.model';
import { PatientAddress } from '../models/patient-address.model';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(Patient)
    private readonly patientModel: typeof Patient,
    private userCreateService: UserCreateService,
    private readonly sequelize: Sequelize,
  ) { }

  async getPatients(): Promise<any> {
    return await this.patientModel.findAll();
  }

  async getPatientById(userId: string): Promise<any> {
    return await this.patientModel.findAll({
      where: { userId: userId },
      include: [
        User,
        PatientAddress,
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

      const user = await this.userCreateService.saveUser(userData, action, transaction, 3);

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
}
