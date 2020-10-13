import { BelongsTo } from 'sequelize-typescript';
import { User } from './../../users/models/user.model';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { ProviderReference } from './provider-reference.model';
import { ProviderLanguage } from './provider-language.model';
import { ProviderAffilation } from './provider-affilation.model';
import { ProviderAddress } from './provider-address.model';
import { ProviderEducation } from './provider-education.model';
import { ProviderHistory } from './provider-history.model';
import { ProviderHospital } from './provider-hospital.model';

@Table
export class Provider extends Model<Provider> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  dateOfBirth: string;

  @Column
  ethnicity: string;

  @Column(DataType.ENUM('M', 'F', 'T'))
  gender: 'M' | 'F' | 'T'

  @Column
  areaOfInterest: string;

  @Column
  speciality: string;

  @Column
  hasDrugAddiction: boolean;

  @Column
  hasCriminalRecord: boolean;

  @Column
  hasMalpractice: boolean;

  @HasOne(() => ProviderHistory)
  history: ProviderHistory;

  @HasOne(() => ProviderAddress)
  address: ProviderAddress;

  @HasMany(() => ProviderAffilation)
  affilations: Array<ProviderAffilation>;

  @HasMany(() => ProviderEducation)
  educations: Array<ProviderEducation>;

  @HasMany(() => ProviderHospital)
  hospitals: Array<ProviderHospital>;

  @HasMany(() => ProviderLanguage)
  languages: Array<ProviderLanguage>;

  @HasMany(() => ProviderReference)
  references: Array<ProviderReference>;

  @BelongsTo(() => User)
  user: User;
}
