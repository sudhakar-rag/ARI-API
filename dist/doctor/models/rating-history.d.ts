import { Model } from 'sequelize-typescript';
import { Provider } from './provider.model';
export declare class RatingHistory extends Model<RatingHistory> {
    providerId: number;
    patientId: number;
    rating: number;
    review: string;
    provider: Provider;
}
