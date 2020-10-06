import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Speciality extends Model<Speciality> {
  @Column
  name: string;
}
