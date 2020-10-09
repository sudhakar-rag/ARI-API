import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Subscription extends Model<Subscription> {
    @Column
    code: string;

    @Column
    name: string;
}
