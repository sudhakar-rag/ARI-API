import { Language } from './language.model';
import { Model } from 'sequelize-typescript';
import { Provider } from './provider.model';
export declare class ProviderLanguage extends Model<ProviderLanguage> {
    providerId: number;
    langId: number;
    provider: Provider;
    language: Language;
}
