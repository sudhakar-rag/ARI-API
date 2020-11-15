import { Model } from 'sequelize-typescript';
import { Provider } from './provider.model';
export declare class ProviderHospital extends Model<ProviderHospital> {
    providerId: number;
    hospital: string;
    location: string;
    state: string;
    fromYear: number;
    toYear: number;
    provider: Provider;
}
