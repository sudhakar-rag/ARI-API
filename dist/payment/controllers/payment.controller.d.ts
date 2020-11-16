import { PaymentService } from './../services/payment.service';
import { ResponseData } from './../../core/common/response-data';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    getPayments(userId: number): Promise<ResponseData>;
    savePayment(paymentData: any): Promise<ResponseData>;
}
