import { Language } from './language.model';
import { User } from './../../users/models/user.model';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class ProviderLanguage extends Model<ProviderLanguage> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Language)
  @Column
  langId: number;
}
