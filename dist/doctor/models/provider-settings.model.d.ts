import { Model } from 'sequelize-typescript';
export declare class ProviderSetting extends Model<ProviderSetting> {
    providerId: number;
    label: string;
    value: string;
}
