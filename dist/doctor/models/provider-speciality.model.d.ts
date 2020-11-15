import { Specalist } from '@app/src/shared/models/specalist.model';
import { Model } from 'sequelize-typescript';
import { Provider } from './provider.model';
export declare class ProviderSpecality extends Model<ProviderSpecality> {
    providerId: number;
    specalityId: number;
    specalist: Specalist;
    provider: Provider;
}
