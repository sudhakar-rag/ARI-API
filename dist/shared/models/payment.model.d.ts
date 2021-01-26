import { Model } from 'sequelize-typescript';
import { Appointment } from './appointment.model';
import { Subscription } from './subscription.model';
export declare class Payment extends Model<Payment> {
    userId: number;
    type: 'S' | 'P';
    paymentType: 'S' | 'A';
    appointmentId: number;
    subscriptionId: Subscription;
    amount: number;
    txnId: string;
    status: 'APPROVED' | 'PENDING' | 'CANCELLED' | 'REFUNDED';
    subscription: Subscription;
    appointment: Appointment;
}
