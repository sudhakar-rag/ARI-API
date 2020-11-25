import { EmailService } from './../../email/email.service';
import { CreateProviderService } from './../../doctor/services/create-provider.service';
import { PatientBasicDto } from './../dto/patient-basic.dto';
import { PatientService } from './../services/patient.service';
import { ResponseData } from '@app/src/core/common/response-data';
import { PatientDto } from '../dto/patient.dto';
import { CreatePatientService } from '../services/create-patient.service';
export declare class PatientsController {
    private providerService;
    private patientsService;
    private createPatientService;
    private emailService;
    constructor(providerService: CreateProviderService, patientsService: PatientService, createPatientService: CreatePatientService, emailService: EmailService);
    getPatients(queryParams: any): Promise<ResponseData>;
    getAvailabilityData(providerId: string): Promise<ResponseData>;
    testMail(data: any): Promise<ResponseData>;
    getPatientInfo(userId: string): Promise<ResponseData>;
    createPatient(patientInfo: PatientDto): Promise<ResponseData>;
    updateBasicInfo(basicInfo: PatientBasicDto): Promise<ResponseData>;
    updateSubscription(subData: any): Promise<ResponseData>;
    updateHistory(historyData: any): Promise<ResponseData>;
    updateHealth(healthData: any): Promise<ResponseData>;
    updateSymptoms(symptData: any): Promise<ResponseData>;
    updateMedProblems(medProbData: any): Promise<ResponseData>;
    saveRatings(ratingData: any): Promise<ResponseData>;
    updateProvider(proData: any): Promise<ResponseData>;
}
