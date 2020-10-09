import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Symptom extends Model<Symptom> {
    @Column
    name: string;
}
