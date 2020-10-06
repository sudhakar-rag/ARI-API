import { User } from './../../users/models/user.model';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class ProviderAffilation extends Model<ProviderAffilation> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  name: string;
}
