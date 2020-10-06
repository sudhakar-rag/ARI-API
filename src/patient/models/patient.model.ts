import { User } from '@app/src/users/models/user.model';
import { Table, Column, Model, ForeignKey, HasMany, BelongsTo, DataType } from 'sequelize-typescript';

@Table
export class Patient extends Model<Patient> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  profilePicture: string;


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

  // @HasMany(() => MedicalProblems)
  // medicalProblems: MedicalProblems[]


  // @HasMany(() => PatientSymptoms)
  // currentSymptoms: PatientSymptoms[]

}

// @Table
// export class PymentInfo extends Model<PymentInfo> {
//   @ForeignKey(() => Patient)
//   @Column
//   patientId: number;

//   @Column
//   name: string;

//   @Column
//   creditCard: string;

//   @Column
//   expiryMonth: string;

//   @Column
//   expiryYear: string;

// }


// @Table
// export class HealthInfo extends Model<HealthInfo> {

//   @Column
//   listOfMedications: string;

//   @Column
//   medicationsAndVitamins: string;


//   @Column
//   dietaryRestrictions: string;

//   @Column
//   listOfAllergies: string;
// }


// @Table
// export class Symptoms extends Model<Symptoms> {

//   @Column
//   key: string;

//   @Column
//   value: string;
// }

// @Table
// export class PatientSymptoms extends Model<PatientSymptoms> {
//   @ForeignKey(() => Patient)
//   @Column
//   patientId: number;

//   @ForeignKey(() => Patient)
//   @Column
//   userId: number;

//   @ForeignKey(() => Symptoms)
//   @Column
//   SymptomId: number;

// }


// @Table
// export class MedicalProblems extends Model<MedicalProblems> {

//   @Column
//   key: string;

//   @Column
//   value: string;
// }

// @Table
// export class PatientMedical extends Model<PatientMedical> {
//   @ForeignKey(() => Patient)
//   @Column
//   patientId: number;

//   @ForeignKey(() => PatientMedical)
//   @Column
//   medicalPbmId: number;

// }