import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType,
    BelongsToMany,
} from 'sequelize-typescript';
import { Provider } from './../../doctor/models/provider.model';
import { Patient } from './../../patient/models/patient.model';
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

    @Column(DataType.ENUM('I', 'G'))
    type: 'I' | 'G'

    @Column
    meetingId: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    joinUrl: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    startUrl: string;

    @Column(DataType.DATE)
    startTime: string;

    @Column(DataType.DATE)
    endTime: string;

    @Column(DataType.ENUM('PENDING', 'COMPLETED'))
    status: 'PENDING' | 'COMPLETED'

    @BelongsTo(() => Provider)
    provider: Provider;

    @BelongsTo(() => Patient)
    patient: Patient;

    @BelongsToMany(() => Payment, () => AppointmentPayment)
    payments: Payment[];
}
