import { Model } from 'sequelize-typescript';
export declare class ProviderReference extends Model<ProviderReference> {
    providerId: number;
    title: string;
    firstName: string;
    lastName: string;
    degree: string;
    hospital: string;
    email: string;
    phone: string;
}
