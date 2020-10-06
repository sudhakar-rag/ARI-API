import { User } from './../../users/models/user.model';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class ProviderEducation extends Model<ProviderEducation> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  school: string;

  @Column
  degree: string;

  @Column
  fromYear: number;

  @Column
  toYear: number;
}
