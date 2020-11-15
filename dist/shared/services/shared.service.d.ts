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
import { Specalist } from '../models/specalist.model';
export declare class SharedService {
    private readonly medicalProblemsModel;
    private readonly symptomModel;
    private readonly specialistModel;
    private readonly languageModel;
    private readonly addressModel;
    private readonly serviceModel;
    private readonly stateModel;
    private readonly countryModel;
    private readonly providerTypeModel;
    private readonly appointmentDetailsModel;
    private readonly paymentModel;
    private readonly sequelize;
    constructor(medicalProblemsModel: typeof MedicalProblems, symptomModel: typeof Symptom, specialistModel: typeof Specalist, languageModel: typeof Language, addressModel: typeof Address, serviceModel: typeof Service, stateModel: typeof State, countryModel: typeof Country, providerTypeModel: typeof ProviderType, appointmentDetailsModel: typeof AppointmentDetails, paymentModel: typeof Payment, sequelize: Sequelize);
    getMedicalProblems(): Promise<any>;
    getSymptoms(): Promise<any>;
    getSpecialists(): Promise<any>;
    getProviderTypes(): Promise<any>;
    getLanguages(): Promise<any>;
    getServices(): Promise<any>;
    getStates(): Promise<any>;
    getCountries(): Promise<any>;
    getAddressById(addressId: any): Promise<any>;
    getAppointmenteDetailsById(appointmentId: any): Promise<any>;
    updateAppointmentSession(data: any): Promise<any>;
}
