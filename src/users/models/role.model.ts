import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Role extends Model<Role> {
    @Column
    name: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    permissions: string;
}