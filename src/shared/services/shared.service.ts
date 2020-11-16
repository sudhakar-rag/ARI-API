import { Payment } from './../models/payment.model';
import { Country } from './../models/country.model';
import { State } from './../models/state.model';
import { ProviderType } from './../models/provider-type.model';
import { AppointmentDetails } from './../models/appointment-details.model';
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
    @InjectModel(State)
    private readonly stateModel: typeof State,
    @InjectModel(Country)
    private readonly countryModel: typeof Country,
    @InjectModel(ProviderType)
    private readonly providerTypeModel: typeof ProviderType,
    @InjectModel(AppointmentDetails)
    private readonly appointmentDetailsModel: typeof AppointmentDetails,
    @InjectModel(Payment)
    private readonly paymentModel: typeof Payment,
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

  async getProviderTypes(): Promise<any> {
    return await this.providerTypeModel.findAll();
  }

  async getLanguages(): Promise<any> {
    return await this.languageModel.findAll();
  }

  async getServices(): Promise<any> {
    return await this.serviceModel.findAll();
  }

  async getStates(): Promise<any> {
    return await this.stateModel.findAll();
  }

  async getCountries(): Promise<any> {
    return await this.countryModel.findAll();
  }

  async getAddressById(addressId): Promise<any> {
    return await this.addressModel.findOne({
      where: { id: addressId }
    });
  }

  async getAppointmenteDetailsById(appointmentId): Promise<any> {
    return await this.appointmentDetailsModel.findOne({
      where: { appointmentId: appointmentId }
    });
  }


  async updateAppointmentSession(data: any): Promise<any> {

    const sessionData = {
        session: data.session
    }

    const result = await this.appointmentDetailsModel.update(sessionData, { where: { appointmentId: data.appointmentId } });

    return result;

}

}
