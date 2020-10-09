import {
  Table,
  Column,
  Model,
  ForeignKey,
  HasMany,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';

@Table
export class MedicalProblems extends Model<MedicalProblems> {
  @Column
  key: string;

  @Column
  value: string;
}
