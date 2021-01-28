import { EmailService } from './../../email/email.service';
import { UsersService } from './../../users/services/users.service';
import { Payment } from './../../shared/models/payment.model';
import { Sequelize } from 'sequelize-typescript';
import Stripe from 'stripe';
import { CreatePaymentDto } from '../dto/payment.dto';
export declare class PaymentService {
    private readonly paymentModel;
    private usersService;
    private emailService;
    private readonly sequelize;
    constructor(paymentModel: typeof Payment, usersService: UsersService, emailService: EmailService, sequelize: Sequelize);
    getPaymentsById(userId: number): Promise<any>;
    getProviderPaymentsById(providerId: number): Promise<any>;
    doStripePayment(data: {
        amount: number;
        token: string;
    }): Promise<Stripe.Response<Stripe.Charge>>;
    savePayment(paymentData: CreatePaymentDto): Promise<any>;
    chargeStripe(token: string): Promise<any>;
    refundPayment(appointmentId: any): Promise<any>;
}
