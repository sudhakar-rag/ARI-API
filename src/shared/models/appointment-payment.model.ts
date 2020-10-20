import {
    Table,
    Column,
    Model,
    ForeignKey
} from 'sequelize-typescript';
import { Appointment } from './appointment.model';
import { Payment } from './payment.model';

@Table
export class AppointmentPayment extends Model<AppointmentPayment> {
    @ForeignKey(() => Appointment)
    @Column
    appointmentId: number;

    @ForeignKey(() => Payment)
    @Column
    paymentId: number;
}
