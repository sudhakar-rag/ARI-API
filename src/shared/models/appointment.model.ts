import { Notification } from './notification.model';
import { Attachments } from './attachments.model';
import { HasMany } from 'sequelize-typescript';
import { ProviderAvailabilitySlot } from '@app/src/doctor/models/provider-availability-slot.model';
import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType,
    BelongsToMany,
    HasOne,
} from 'sequelize-typescript';
import { Provider } from './../../doctor/models/provider.model';
import { Patient } from './../../patient/models/patient.model';
import { AppointmentDetails } from './appointment-details.model';
import { AppointmentPayment } from './appointment-payment.model';
import { Payment } from './payment.model';

@Table
export class Appointment extends Model<Appointment> {
    @ForeignKey(() => Provider)
    @Column
    providerId: number;

    @ForeignKey(() => Patient)
    @Column
    patientId: number;

    @Column(DataType.DATEONLY)
    date: string;

    @Column
    start: string;

    @Column
    end: string;

    @Column(DataType.ENUM('I', 'G'))
    type: 'I' | 'G'

    @Column
    meetingId: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    joinUrl: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    startUrl: string;

    @Column(DataType.ENUM('PENDING', 'COMPLETED'))
    status: 'PENDING' | 'ACCEPTED' | 'COMPLETED' | 'CANCELLED'

    @BelongsTo(() => Provider)
    provider: Provider;

    @BelongsTo(() => Patient)
    patient: Patient;

    // @BelongsTo(() => ProviderAvailabilitySlot)
    // slot: ProviderAvailabilitySlot;

    @BelongsToMany(() => Payment, () => AppointmentPayment)
    payments: Payment[];

    @HasOne(() => AppointmentDetails)
    details: AppointmentDetails;

    @HasMany(() => Attachments)
    attachments: Attachments[]

    @HasMany(() => Notification)
    notifications: Notification[]
}
