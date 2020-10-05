import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Doctor extends Model<Doctor> {
  @Column
  userId: number;

  @Column
  businessName: string;

  @Column
  isPublic: number;

  @Column
  specialityId: number;

  @Column
  areaOfInterest: number;

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
