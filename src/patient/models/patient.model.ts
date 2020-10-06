import { PatientMedicalProblem } from './patient-medical-problems.model';
import { User } from './../../users/models/user.model';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  HasMany,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';

@Table
export class Patient extends Model<Patient> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  gender: string;

  @Column
  dateOfBirth: string;

  @Column
  ethnicity: string;

  @Column
  primaiyProvider: string;

  @Column
  specialist: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  socialHistory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  surgeryHistory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  fatherHisory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  motherHisory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  vaccinationHisory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  travelHistory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  hospitalizationHistory: string;

  @HasMany(() => PatientMedicalProblem)
  medicalProblems: Array<PatientMedicalProblem>;

  // @HasMany(() => Symptoms)
  // currentSymptoms: Array<Symptoms>;
}
