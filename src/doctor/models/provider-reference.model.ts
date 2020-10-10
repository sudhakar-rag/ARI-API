import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Provider } from './provider.model';

@Table
export class ProviderReference extends Model<ProviderReference> {
  @ForeignKey(() => Provider)
  @Column
  providerId: number;

  @Column
  title: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  degree: string;

  @Column
  hospital: string;

  @Column
  email: string;

  @Column
  phone: string;
}
