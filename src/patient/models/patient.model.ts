import { User } from '@app/src/users/models/user.model';
import { Table, Column, Model, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript';

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

  @Column
  socialHistory: string;

  @Column
  surgeryHistory: string;

  @Column
  fatherHisory: string;

  @Column
  motherHisory: string;

  @Column
  vaccinationHisory: string;

  @Column
  travelHistory: string;

  @Column
  hospitalizationHistory: string;

  @HasMany(() => MedicalProblems)
  medicalProblems: Array<MedicalProblems>


  @HasMany(() => Symptoms)
  currentSymptoms: Array<Symptoms>

}

@Table
export class PymentInfo extends Model<PymentInfo> {
  @ForeignKey(() => Patient)
  @Column
  patientId: number;

  @Column
  name: string;

  @Column
  creditCard: string;

  @Column
  expiryMonth: string;

  @Column
  expiryYear: string;

}

@Table
export class MedicalProblems extends Model<MedicalProblems> {

  @Column
  key: string;

  @Column
  value: string;
}


@Table
export class HealthInfo extends Model<HealthInfo> {

  @Column
  listOfMedications: string;

  @Column
  medicationsAndVitamins: string;


  @Column
  dietaryRestrictions: string;

  @Column
  listOfAllergies: string;
}


@Table
export class Symptoms extends Model<Symptoms> {

  @Column
  key: string;

  @Column
  value: string;
}

@Table
export class PatientSymptoms extends Model<PatientSymptoms> {
  @ForeignKey(() => Patient)
  @Column
  patientId: number;

  @ForeignKey(() => Symptoms)
  @Column
  symptomId: number;

  @BelongsTo(() => Symptoms)
  symtom: Symptoms
}


@Table
export class PatientMedical extends Model<PatientMedical> {
  @ForeignKey(() => Patient)
  @Column
  patientId: number;

  @ForeignKey(() => PatientMedical)
  @Column
  medicalPbmId: number;

  @BelongsTo(() => PatientMedical)
  medicalProblem: PatientMedical
}