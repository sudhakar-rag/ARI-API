import { Model } from 'sequelize-typescript';
import { Provider } from './../../doctor/models/provider.model';
import { ProviderAvailabilitySlot } from './provider-availability-slot.model';
export declare class ProviderAvailability extends Model<ProviderAvailability> {
    providerId: number;
    type: 'DAY' | 'DATE';
    value: string;
    provider: Provider;
    slots: ProviderAvailabilitySlot[];
}
