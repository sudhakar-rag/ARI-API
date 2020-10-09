import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Specalist extends Model<Specalist> {
    @Column
    name: string;
}
