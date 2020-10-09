import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Symptoms extends Model<Symptoms> {
    @Column
    name: string;
}
