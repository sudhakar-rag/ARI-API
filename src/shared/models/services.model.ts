import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table
export class Service extends Model<Service> {
    @Column
    code: string;

    @Column
    name: string;
}
