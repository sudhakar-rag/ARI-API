import { User } from '../../users/models/user.model';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class ProviderHospital extends Model<ProviderHospital> {
  @ForeignKey(() => User)
  @Column
  userId: number;

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
