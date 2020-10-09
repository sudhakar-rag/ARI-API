import { MedicalProblems } from '../../shared/models/medical-problems.model';

import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';

import { Patient } from './patient.model';

@Table
export class PatientMedicalProblem extends Model<PatientMedicalProblem> {
  @ForeignKey(() => Patient)
  @Column
  patientId: number;

  @ForeignKey(() => MedicalProblems)
  @Column
  MedicalProblemId: number;

  @BelongsTo(() => MedicalProblems)
  medicalProblem: MedicalProblems;

  @BelongsTo(() => Patient)
  patient: Patient;
}
