import { User } from './../../users/models/user.model';
import { Model } from 'sequelize-typescript';
import { Appointment } from './appointment.model';
export declare class Notification extends Model<Notification> {
    appointmentId: number;
    userId: number;
    message: string;
    status: boolean;
    Appointment: Appointment;
    user: User;
}
