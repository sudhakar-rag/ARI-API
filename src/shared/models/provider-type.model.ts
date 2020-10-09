import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class ProviderType extends Model<ProviderType> {
    @Column
    name: string;
}
