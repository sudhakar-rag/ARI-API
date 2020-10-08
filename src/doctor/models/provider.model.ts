import { User } from './../../users/models/user.model';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class Provider extends Model<Provider> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  businessName: string;

  @Column
  isPublic: number;

  @Column
  addressId: number;

  @Column
  specialityId: number;

  @Column
  areaOfInterest: string;

  @Column
  serviceType: number;

  @Column
  religion: string;

  @Column
  specialBackground: string;

  @Column
  limitation: string;

  @Column
  addiction: string;

  @Column
  crime: string;

  @Column
  malpractice: string;

  @Column
  timezone: string;

  @Column
  isVerified: boolean;

  @Column
  zoomId: number;

  @Column
  zoomUrl: string;

  @Column
  rating: number;

  @Column
  zoomStatus: string;

  @Column
  userStatus: string;

  @Column
  isAvailable: boolean;
}
