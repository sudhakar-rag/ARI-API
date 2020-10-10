import {
  Table,
  Column,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Provider } from './provider.model';

@Table
export class ProviderHospital extends Model<ProviderHospital> {
  @ForeignKey(() => Provider)
  @Column
  providerId: number;

  @Column
  hospital: string;

  @Column
  location: string;

  @Column
  state: string;

  @Column
  fromYear: number;

  @Column
  toYear: number;
}
