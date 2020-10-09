
import { Symptom } from '@app/src/shared/models/symptom.model';
import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';

import { Patient } from './patient.model';

@Table
export class PatientSymptom extends Model<PatientSymptom> {
    @ForeignKey(() => Patient)
    @Column
    patientId: number;

    @ForeignKey(() => Symptom)
    @Column
    symptomId: number;

    @BelongsTo(() => Symptom)
    symptom: Symptom;

    @BelongsTo(() => Patient)
    patient: Patient;
}
