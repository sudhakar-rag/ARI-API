import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class Language extends Model<Language> {
  @Column
  name: string;
}
