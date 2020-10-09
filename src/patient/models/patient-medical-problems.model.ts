import { MedicalProblems } from '../../shared/models/medical-problems.model';

import {
  Table,
  Column,
  Model,
  ForeignKey,
  HasMany,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';

import { Patient } from './patient.model';

// @Table
// export class PatientMedicalProblem extends Model<PatientMedicalProblem> {
//   @ForeignKey(() => Patient)
//   @Column
//   patientId: number;

//   @ForeignKey(() => MedicalProblems)
//   @Column
//   medicalPbmId: number;

//   @BelongsTo(() => MedicalProblems)
//   medicalProblem: MedicalProblems;

//   @BelongsTo(() => Patient)
//   patient: Patient;
// }
