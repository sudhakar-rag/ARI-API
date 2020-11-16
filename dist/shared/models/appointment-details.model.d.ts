import { Model } from 'sequelize-typescript';
export declare class AppointmentDetails extends Model<AppointmentDetails> {
    appointmentId: number;
    appointmentType: string;
    subject: string;
    message: string;
    files: string;
    session: string;
}
