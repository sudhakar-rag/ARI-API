import { Specalist } from '@app/src/shared/models/specalist.model';
import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { Provider } from './provider.model';

@Table
export class ProviderSpecality extends Model<ProviderSpecality> {
    @ForeignKey(() => Provider)
    @Column
    providerId: number;

    @ForeignKey(() => Specalist)
    @Column
    specalityId: number;

    @BelongsTo(() => Specalist)
    specalist: Specalist;

    @BelongsTo(() => Provider)
    provider: Provider;
}
