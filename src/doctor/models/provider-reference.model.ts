import { User } from '../../users/models/user.model';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class ProviderReference extends Model<ProviderReference> {
  @ForeignKey(() => User)
  @Column
  userId: number;

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
