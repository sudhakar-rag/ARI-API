import { Model } from 'sequelize-typescript';
import { Provider } from './provider.model';
export declare class ProviderHistory extends Model<ProviderHistory> {
    providerId: number;
    religoiusAffiliations: string;
    specialBackground: string;
    limitations: string;
    drugAddiction: string;
    crimianalRecord: string;
    malpractice: string;
    provider: Provider;
}
