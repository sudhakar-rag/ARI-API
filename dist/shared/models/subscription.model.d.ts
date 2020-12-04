import { Model } from 'sequelize-typescript';
export declare class Subscription extends Model<Subscription> {
    code: string;
    name: string;
    type: string;
    price: number;
}
