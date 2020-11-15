import { MedicalProblems } from '../../shared/models/medical-problems.model';
import { Model } from 'sequelize-typescript';
import { Patient } from './patient.model';
export declare class PatientMedicalProblem extends Model<PatientMedicalProblem> {
    patientId: number;
    MedicalProblemId: number;
    medicalProblem: MedicalProblems;
    patient: Patient;
}
