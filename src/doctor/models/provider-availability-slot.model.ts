import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType
} from 'sequelize-typescript';
import { ProviderAvailability } from './provider-availability.model';

@Table
export class ProviderAvailabilitySlot extends Model<ProviderAvailabilitySlot> {
    @ForeignKey(() => ProviderAvailability)
    @Column
    providerAvailabilityId: number;

    @Column(DataType.TIME)
    startTime: string;

    @Column(DataType.TIME)
    endTime: string;
}
