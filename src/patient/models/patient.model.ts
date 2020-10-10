// import { PatientMedicalProblem } from './patient-medical-problems.model';
import { User } from './../../users/models/user.model';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  HasMany,
  BelongsTo,
  DataType,
  HasOne,
} from 'sequelize-typescript';
import { Address } from './../../users/models/address.model';
import { Subscription } from './../../shared/models/subscription.model';
import { PatientMedicalProblem } from './patient-medical-problems.model';
import { PatientSymptom } from './patient-symptom.model';
import { PatientSpecalist } from './patient-specalist.model';
import { PatientProviderType } from './patient-provider-type.model';

@Table
export class Patient extends Model<Patient> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @ForeignKey(() => Address)
  @Column
  addressId: number;

  @Column
  dateOfBirth: string;

  @Column
  ethnicity: string;

  @Column(DataType.ENUM('M', 'F', 'T'))
  gender: 'M' | 'F' | 'T'

  @Column(DataType.TEXT({ length: 'tiny' }))
  profilePicture: string;

  @ForeignKey(() => Subscription)
  @Column
  subscriptionId: number;

  @BelongsTo(() => Address)
  address: Address;

  @BelongsTo(() => Subscription)
  subscription: Subscription;

  @HasMany(() => PatientMedicalProblem)
  problems: Array<PatientMedicalProblem>;

  @HasMany(() => PatientSymptom)
  symptoms: Array<PatientSymptom>;

  @HasMany(() => PatientSpecalist)
  specalists: Array<PatientSpecalist>;

  @HasMany(() => PatientProviderType)
  providerTypes: Array<PatientProviderType>;
}
