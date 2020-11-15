import { ProviderType } from '@app/src/shared/models/provider-type.model';
import { Model } from 'sequelize-typescript';
import { Patient } from './patient.model';
export declare class PatientProviderType extends Model<PatientProviderType> {
    patientId: number;
    providerTypeId: number;
    providerType: ProviderType;
    patient: Patient;
}
