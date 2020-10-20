import {
    Table,
    Column,
    Model,
    ForeignKey
} from 'sequelize-typescript';
import { Provider } from './provider.model';

@Table
export class ProviderSetting extends Model<ProviderSetting> {
    @ForeignKey(() => Provider)
    @Column
    providerId: number;

    @Column
    label: string;

    @Column
    value: string;
}
