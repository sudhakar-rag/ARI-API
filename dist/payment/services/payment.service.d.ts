import { EmailService } from './../../email/email.service';
import { UsersService } from './../../users/services/users.service';
import { Payment } from './../../shared/models/payment.model';
import { Sequelize } from 'sequelize-typescript';
export declare class PaymentService {
    private readonly paymentModel;
    private usersService;
    private emailService;
    private readonly sequelize;
    constructor(paymentModel: typeof Payment, usersService: UsersService, emailService: EmailService, sequelize: Sequelize);
    getPaymentsById(userId: number): Promise<any>;
    savePayment(paymentData: any): Promise<any>;
    chargeStripe(token: string): Promise<any>;
}
