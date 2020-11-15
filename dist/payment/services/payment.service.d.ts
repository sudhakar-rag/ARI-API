import { Payment } from './../../shared/models/payment.model';
import { Sequelize } from 'sequelize-typescript';
export declare class PaymentService {
    private readonly paymentModel;
    private readonly sequelize;
    constructor(paymentModel: typeof Payment, sequelize: Sequelize);
    getPaymentsById(userId: number): Promise<any>;
    savePayment(paymentData: any): Promise<any>;
}
