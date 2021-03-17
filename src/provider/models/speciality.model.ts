import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Speciality extends Model<Speciality> {
  @Column
  name: string;
}
