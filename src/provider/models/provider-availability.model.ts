import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType,
    HasMany,
} from 'sequelize-typescript';
import { Provider } from './../../provider/models/provider.model';
import { ProviderAvailabilitySlot } from './provider-availability-slot.model';

@Table
export class ProviderAvailability extends Model<ProviderAvailability> {
    @ForeignKey(() => Provider)
    @Column
    providerId: number;

    @Column(DataType.ENUM('DAY', 'DATE'))
    type: 'DAY' | 'DATE'

    @Column
    value: string;

    @BelongsTo(() => Provider)
    provider: Provider;

    @HasMany(() => ProviderAvailabilitySlot)
    slots: ProviderAvailabilitySlot[];
}
