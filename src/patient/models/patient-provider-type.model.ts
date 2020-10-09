import { ProviderType } from '@app/src/shared/models/provider-type.model';
import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';

import { Patient } from './patient.model';

@Table
export class PatientProviderType extends Model<PatientProviderType> {
    @ForeignKey(() => Patient)
    @Column
    patientId: number;

    @ForeignKey(() => ProviderType)
    @Column
    providerTypeId: number;

    @BelongsTo(() => ProviderType)
    providerType: ProviderType;

    @BelongsTo(() => Patient)
    patient: Patient;
}
