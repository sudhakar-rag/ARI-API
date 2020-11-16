import { Specalist } from '@app/src/shared/models/specalist.model';
import { Model } from 'sequelize-typescript';
import { Patient } from './patient.model';
export declare class PatientSpecalist extends Model<PatientSpecalist> {
    patientId: number;
    specalistId: number;
    specalist: Specalist;
    patient: Patient;
}
