import { Model } from 'sequelize-typescript';
import { Appointment } from './appointment.model';
export declare class Attachments extends Model<Attachments> {
    appointmentId: number;
    type: string;
    fileName: string;
    fileUrl: string;
    uploadedBy: number;
    appointment: Appointment;
}
