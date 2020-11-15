import { Model } from 'sequelize-typescript';
import { Provider } from './provider.model';
export declare class ProviderEducation extends Model<ProviderEducation> {
    providerId: number;
    school: string;
    degree: string;
    fromYear: number;
    toYear: number;
    provider: Provider;
}
