import { User } from './../../users/models/user.model';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { ProviderReference } from './provider-reference.model';
import { ProviderLanguage } from './provider-language.model';
import { ProviderAffilation } from './provider-affilation.model';

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

  @HasMany(() => ProviderAffilation)
  affilations: Array<ProviderAffilation>;

  @HasMany(() => ProviderLanguage)
  languages: Array<ProviderLanguage>;

  @HasMany(() => ProviderReference)
  references: Array<ProviderReference>;
}
