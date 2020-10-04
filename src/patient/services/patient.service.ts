import { PatientDto } from './../dto/patient.dto';
import { Patient } from './../models/patient.model';

import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Patient)
    private readonly patientModel: typeof Patient,
  ) {}

  async getPatients(): Promise<any> {
    return await this.patientModel.findAll();
  }

  async saveRole(patientData: PatientDto): Promise<any> {
    let data = {
      userId: patientData.userId,
      serviceType: patientData.userId,
      fatherBirthDate: patientData.fatherBirthDate,
      fatherDeathDate: patientData.fatherDeathDate,
      motherBirthDate: patientData.motherBirthDate,
      motherDeathDate: patientData.motherDeathDate,
      drugUse: patientData.drugUse,
      smoking: patientData.smoking,
      smokingPerDay: patientData.smokingPerDay,
      alcohol: patientData.alcohol,
      alcoholPerDay: patientData.alcoholPerDay,
      surgeries: patientData.surgeries,
      vaccination: patientData.vaccination,
      travel: patientData.travel,
      hospitalization: patientData.hospitalization,
      prescriptionMeds: patientData.prescriptionMeds,
      overTheCounterMeds: patientData.overTheCounterMeds,
      dietRestrictions: patientData.dietRestrictions,
      allergies: patientData.allergies,
      appointmentPoint: patientData.appointmentPoint,
    };

    let patient: Patient;
    if (patientData.id) {
      await this.patientModel.update(data, { where: { id: patientData.id } });
      patient = await this.patientModel.findOne({
        where: { id: patientData.id },
      });
    } else {
      patient = await this.patientModel.create(data);
    }

    return patient;
  }

  async deletePatient(id: number): Promise<any> {
    let result = await this.patientModel.destroy({ where: { id: id } });
    return result;
  }
}
