import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Country extends Model<Country> {
    @Column
    name: string;
}
