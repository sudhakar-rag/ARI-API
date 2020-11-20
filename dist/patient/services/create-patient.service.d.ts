import { PatientSubscription } from './../models/patient-subscription.model';
import { PatientDto } from './../dto/patient.dto';
import { Patient } from './../models/patient.model';
import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize';
import { UserCreateService } from '@app/src/users/services/user-create.service';
import { PatientMedicalProblem } from '../models/patient-medical-problems.model';
import { PatientProviderType } from '../models/patient-provider-type.model';
import { PatientSpecalist } from '../models/patient-specalist.model';
import { PatientSymptom } from '../models/patient-symptom.model';
import { Address } from './../../users/models/address.model';
import { User } from '@app/src/users/models/user.model';
import { AddressDto } from '../dto/address.dto';
import { PatientAddress } from '../models/patient-address.model';
export declare class CreatePatientService {
    private readonly userModel;
    private readonly patientModel;
    private readonly patientSpecalistModel;
    private readonly patientSymptomModel;
    private readonly patientMedicalProblemModel;
    private readonly patientProviderTypeModel;
    private readonly addressModel;
    private readonly patientAddressModel;
    private readonly patientSubscriptionModel;
    private userCreateService;
    private readonly sequelize;
    constructor(userModel: typeof User, patientModel: typeof Patient, patientSpecalistModel: typeof PatientSpecalist, patientSymptomModel: typeof PatientSymptom, patientMedicalProblemModel: typeof PatientMedicalProblem, patientProviderTypeModel: typeof PatientProviderType, addressModel: typeof Address, patientAddressModel: typeof PatientAddress, patientSubscriptionModel: typeof PatientSubscription, userCreateService: UserCreateService, sequelize: Sequelize);
    createPatient(patientData: PatientDto): Promise<any>;
    savePatientAddress(addressData: AddressDto, transaction: Transaction, patientId?: any): Promise<any>;
    savePatientInfo(createUserData: PatientDto, action: string, transaction: Transaction): Promise<Patient>;
    savePatientSubscription(patientId: number, transaction: Transaction): Promise<any>;
    saveSpecalists(data: {
        patientId: string;
        specalists: Array<number>;
    }, transaction: Transaction): Promise<any>;
    saveSymptoms(data: {
        patientId: string;
        symptoms: Array<number>;
    }, transaction: Transaction): Promise<any>;
    saveMedicalProblems(data: {
        patientId: string;
        problems: Array<number>;
    }, transaction: Transaction): Promise<any>;
    saveProviderTypes(data: {
        patientId: string;
        providerTypes: Array<number>;
    }, transaction: Transaction): Promise<any>;
    updateBasicInfo(data: any): Promise<any>;
    updateSubscription(data: {
        patientId: number;
        subscriptionId: number;
    }): Promise<any>;
    updateHistory(data: any): Promise<any>;
    updateHealth(data: any): Promise<any>;
    updateSymptoms(data: any): Promise<any>;
    updateMedProblems(data: any): Promise<any>;
    updateProvider(data: any): Promise<any>;
    deletePatient(id: number): Promise<any>;
}
