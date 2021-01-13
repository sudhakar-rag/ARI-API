import { Notification } from './notification.model';
import { Attachments } from './attachments.model';
import { Model } from 'sequelize-typescript';
import { Provider } from './../../doctor/models/provider.model';
import { Patient } from './../../patient/models/patient.model';
import { AppointmentDetails } from './appointment-details.model';
import { Payment } from './payment.model';
export declare class Appointment extends Model<Appointment> {
    providerId: number;
    patientId: number;
    date: string;
    start: string;
    end: string;
    type: 'I' | 'G';
    meetingId: string;
    joinUrl: string;
    startUrl: string;
    status: 'PENDING' | 'ACCEPTED' | 'COMPLETED' | 'CANCELLED';
    provider: Provider;
    patient: Patient;
    payments: Payment[];
    details: AppointmentDetails;
    attachments: Attachments[];
    notifications: Notification[];
}
