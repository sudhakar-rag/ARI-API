import { Specalist } from '@app/src/shared/models/specalist.model';
import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';

import { Patient } from './patient.model';

@Table
export class PatientSpecalist extends Model<PatientSpecalist> {
    @ForeignKey(() => Patient)
    @Column
    patientId: number;

    @ForeignKey(() => Specalist)
    @Column
    specalistId: number;

    @BelongsTo(() => Specalist)
    specalist: Specalist;

    @BelongsTo(() => Patient)
    patient: Patient;
}
