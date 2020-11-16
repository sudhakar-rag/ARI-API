import { Service } from './../../shared/models/services.model';
import { Model } from 'sequelize-typescript';
import { Provider } from './provider.model';
export declare class ProviderServices extends Model<ProviderServices> {
    providerId: number;
    serviceId: number;
    provider: Provider;
    service: Service;
}
