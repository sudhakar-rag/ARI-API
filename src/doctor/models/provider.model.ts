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

  @Column(DataType.TEXT({ length: 'medium' }))
  religoiusAffiliations: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  specialBackground: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  limitations: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  drugAddiction: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  crimianalRecord: string;

  @Column(DataType.TEXT({ length: 'medium' }))
  malpractice: string;

  @HasMany(() => ProviderAffilation)
  affilations: Array<ProviderAffilation>;

  @HasMany(() => ProviderLanguage)
  languages: Array<ProviderLanguage>;

  @HasMany(() => ProviderReference)
  references: Array<ProviderReference>;
}
