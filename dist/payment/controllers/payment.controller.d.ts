import { PaymentService } from './../services/payment.service';
import { ResponseData } from './../../core/common/response-data';
import { CreatePaymentDto } from '../dto/payment.dto';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    getPayments(userId: number): Promise<ResponseData>;
    getProviderPayments(providerId: number): Promise<ResponseData>;
    savePayment(paymentData: CreatePaymentDto): Promise<ResponseData>;
    refundPayment(appointmentId: any): Promise<any>;
}
