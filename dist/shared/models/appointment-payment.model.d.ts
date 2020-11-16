import { Model } from 'sequelize-typescript';
export declare class AppointmentPayment extends Model<AppointmentPayment> {
    appointmentId: number;
    paymentId: number;
}
