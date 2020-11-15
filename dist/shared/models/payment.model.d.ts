import { Model } from 'sequelize-typescript';
export declare class Payment extends Model<Payment> {
    userId: number;
    type: 'S' | 'P';
    amount: number;
    txnId: string;
    status: 'succeeded' | 'pending' | 'failed';
}
