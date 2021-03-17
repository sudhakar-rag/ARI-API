import { PatientSubscription } from './patient-subscription.model';
import { RatingHistory } from '../../provider/models/rating-history';
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
import { Subscription } from './../../shared/models/subscription.model';
import { PatientMedicalProblem } from './patient-medical-problems.model';
import { PatientSymptom } from './patient-symptom.model';
import { PatientSpecalist } from './patient-specalist.model';
import { PatientProviderType } from './patient-provider-type.model';
import { PatientAddress } from './patient-address.model';

@Table
export class Patient extends Model<Patient> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  dateOfBirth: string;

  @Column
  ethnicity: string;

  @Column(DataType.ENUM('M', 'F', 'T'))
  gender: 'M' | 'F' | 'T'

  @ForeignKey(() => Subscription)
  @Column
  subscriptionId: number;

  @Column(DataType.TEXT({ length: 'medium' }))
  otherMedicalProblems: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  otherSymptoms: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  otherSpecialist: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  medications: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  vitamins: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  restrictions: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  allergies: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  socialHistory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  surgeryHistory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  familyHistory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  vaccinationHistory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  travelHistory: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  hospitalizationHistory: string;

  @HasOne(() => PatientAddress)
  address: PatientAddress;

  @BelongsTo(() => Subscription)
  subscription: Subscription;

  @HasMany(() => PatientMedicalProblem)
  problems: Array<PatientMedicalProblem>;

  @HasMany(() => RatingHistory)
  ratings: Array<RatingHistory>;

  @HasMany(() => PatientSymptom)
  symptoms: Array<PatientSymptom>;

  @HasMany(() => PatientSpecalist)
  specalists: Array<PatientSpecalist>;

  @HasMany(() => PatientProviderType)
  providerTypes: Array<PatientProviderType>;

  @HasMany(() => PatientSubscription)
  patientSubscriptions: Array<PatientSubscription>;

  @BelongsTo(() => User)
  user: User;

}
