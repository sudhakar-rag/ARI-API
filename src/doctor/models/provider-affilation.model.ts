import {
  Table,
  Column,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Provider } from './provider.model';

@Table
export class ProviderAffilation extends Model<ProviderAffilation> {
  @ForeignKey(() => Provider)
  @Column
  providerId: number;

  @Column
  name: string;
}
