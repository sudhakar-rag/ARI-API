import { Model } from 'sequelize-typescript';
import { Provider } from './provider.model';
export declare class ProviderAffilation extends Model<ProviderAffilation> {
    providerId: number;
    name: string;
    provider: Provider;
}
