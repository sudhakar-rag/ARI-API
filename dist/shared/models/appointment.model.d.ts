import { Notification } from './notification.model';
import { Attachments } from './attachments.model';
import { ProviderAvailabilitySlot } from '@app/src/doctor/models/provider-availability-slot.model';
import { Model } from 'sequelize-typescript';
import { Provider } from './../../doctor/models/provider.model';
import { Patient } from './../../patient/models/patient.model';
import { AppointmentDetails } from './appointment-details.model';
import { Payment } from './payment.model';
export declare class Appointment extends Model<Appointment> {
    providerId: number;
    patientId: number;
    date: string;
    slotId: number;
    type: 'I' | 'G';
    meetingId: string;
    joinUrl: string;
    startUrl: string;
    status: 'PENDING' | 'ACCEPTED' | 'COMPLETED' | 'CANCELLED';
    provider: Provider;
    patient: Patient;
    slot: ProviderAvailabilitySlot;
    payments: Payment[];
    details: AppointmentDetails;
    attachments: Attachments[];
    notifications: Notification[];
}