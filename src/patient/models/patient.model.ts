import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Patient extends Model<Patient> {
  @Column
  userId: number;

  @Column
  serviceType: number;

  @Column
  fatherBirthDate: Date;

  @Column
  fatherDeathDate: Date;

  @Column
  motherBirthDate: Date;

  @Column
  motherDeathDate: Date;

  @Column
  drugUse: boolean;

  @Column
  smoking: boolean;

  @Column
  smokingPerDay: number;

  @Column
  alcohol: boolean;

  @Column
  alcoholPerDay: number;

  @Column
  surgeries: string;

  @Column
  vaccination: string;

  @Column
  travel: string;

  @Column
  hospitalization: string;

  @Column
  prescriptionMeds: string;

  @Column
  overTheCounterMeds: string;

  @Column
  dietRestrictions: string;

  @Column
  allergies: string;

  @Column
  appointmentPoint: string;
}
