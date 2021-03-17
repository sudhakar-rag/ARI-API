import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType
} from 'sequelize-typescript';
import { Provider } from './provider.model';

@Table
export class ProviderExceptionalDays extends Model<ProviderExceptionalDays> {
    @ForeignKey(() => Provider)
    @Column
    providerId: number;

    @Column(DataType.DATEONLY)
    date: string;

    @BelongsTo(() => Provider)
    provider: Provider;
}
