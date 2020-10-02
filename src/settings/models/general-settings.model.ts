import { Table, Column, Model, DataType } from 'sequelize-typescript';
@Table
export class GeneralSetting extends Model<GeneralSetting> {

    @Column
    label: string;

    @Column(DataType.TEXT({ length: 'tiny' }))
    value: string;
}