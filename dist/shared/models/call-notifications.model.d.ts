import { Model } from 'sequelize-typescript';
import { Appointment } from './appointment.model';
export declare class CallNotification extends Model<CallNotification> {
    appointmentId: number;
    description: string;
    status: 'PENDING' | 'ACCEPTED' | 'COMPLETED' | 'CANCELLED';
    appointment: Appointment;
}
