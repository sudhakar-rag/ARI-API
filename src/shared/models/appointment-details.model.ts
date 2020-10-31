import {
    Table,
    Column,
    Model,
    ForeignKey,
    DataType,
} from 'sequelize-typescript';
import { Appointment } from './appointment.model';

@Table
export class AppointmentDetails extends Model<AppointmentDetails> {
    @ForeignKey(() => Appointment)
    @Column
    appointmentId: number;

    @Column
    appointmentType: string;

    @Column
    subject: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    message: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    files: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    session: string;
}
