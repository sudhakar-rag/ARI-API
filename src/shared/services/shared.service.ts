import { Service } from './../models/services.model';
import { Language } from './../../doctor/models/language.model';
import { Address } from './../../users/models/address.model';
import { Symptom } from './../models/symptom.model';
import { MedicalProblems } from './../models/medical-problems.model';
import { Sequelize } from 'sequelize-typescript';

import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreateService } from '@app/src/users/services/user-create.service';
import { Specalist } from '../models/specalist.model';

@Injectable()
export class SharedService {
  constructor(
    @InjectModel(MedicalProblems)
    private readonly medicalProblemsModel: typeof MedicalProblems,
    @InjectModel(Symptom)
    private readonly symptomModel: typeof Symptom,
    @InjectModel(Specalist)
    private readonly specialistModel: typeof Specalist,
    @InjectModel(Language)
    private readonly languageModel: typeof Language,
    @InjectModel(Address)
    private readonly addressModel: typeof Address,
    @InjectModel(Service)
    private readonly serviceModel: typeof Service,
    private readonly sequelize: Sequelize,
  ) { }

  async getMedicalProblems(): Promise<any> {
    return await this.medicalProblemsModel.findAll();
  }

  async getSymptoms(): Promise<any> {
    return await this.symptomModel.findAll();
  }

  async getSpecialists(): Promise<any> {
    return await this.specialistModel.findAll();
  }

  async getLanguages(): Promise<any> {
    return await this.languageModel.findAll();
  }

  async getServices(): Promise<any> {
    return await this.serviceModel.findAll();
  }

  async getAddressById(addressId): Promise<any> {
    return await this.addressModel.findOne({
      where: { id: addressId }
    });
  }

}
