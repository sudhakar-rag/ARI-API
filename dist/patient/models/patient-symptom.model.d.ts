import { Symptom } from '@app/src/shared/models/symptom.model';
import { Model } from 'sequelize-typescript';
import { Patient } from './patient.model';
export declare class PatientSymptom extends Model<PatientSymptom> {
    patientId: number;
    symptomId: number;
    symptom: Symptom;
    patient: Patient;
}
