import { PatientDto } from './../dto/patient.dto';
import { Patient } from './../models/patient.model';

import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient)
    private readonly patientModel: typeof Patient,
  ) { }

  async getPatients(): Promise<any> {
    return await this.patientModel.findAll();
  }

  async createPatient(patientData: PatientDto): Promise<any> {
    let data: any = {
      id: patientData.id || null,
      userId: patientData.userId,
      gender: patientData.gender,
      dateOfBirth: patientData.dateOfBirth,
      ethnicity: patientData.ethnicity,
      primaiyProvider: patientData.primaiyProvider,
      specialist: patientData.specialist,
      socialHistory: patientData.socialHistory,
      surgeryHistory: patientData.surgeryHistory,
      fatherHisory: patientData.fatherHisory,
      motherHisory: patientData.motherHisory,
      vaccinationHisory: patientData.vaccinationHisory,
      travelHistory: patientData.travelHistory,
      hospitalizationHistory: patientData.hospitalizationHistory,
      medicalProblems: patientData.medicalProblems,
      currentSymptoms: patientData.currentSymptoms,
    };


    if (patientData.id) {
      data.id = patientData.id;
    }

    if (data.id) {
      return await this.patientModel.update(data, { where: { id: data.id } });
    } else {
      const savedPost = await this.patientModel.create(data);
      return savedPost;
    }
  }

  async deletePatient(id: number): Promise<any> {
    return await this.patientModel.destroy({ where: { id: id } });
  }
}
