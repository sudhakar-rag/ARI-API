import { Model } from 'sequelize-typescript';
import { Provider } from './provider.model';
export declare class ProviderExceptionalDays extends Model<ProviderExceptionalDays> {
    providerId: number;
    date: string;
    provider: Provider;
}
