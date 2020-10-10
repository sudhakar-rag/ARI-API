import { Language } from './language.model';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Provider } from './provider.model';

@Table
export class ProviderLanguage extends Model<ProviderLanguage> {
  @ForeignKey(() => Provider)
  @Column
  providerId: number;

  @ForeignKey(() => Language)
  @Column
  langId: number;
}
