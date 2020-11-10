import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class State extends Model<State> {
    @Column
    name: string;
}
