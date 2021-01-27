export declare class CreatePaymentDto {
    userId: number;
    type: 'S' | 'P';
    paymentType: 'S' | 'A';
    appointmentId?: number;
    subscriptionId?: number;
    amount: number;
    txnId: string;
    status: 'APPROVED' | 'PENDING' | 'CANCELLED' | 'REFUNDED';
    stripe?: any;
}
