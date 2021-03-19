import {
    Table,
    Column,
    Model,
    ForeignKey,
    DataType,
    BelongsTo,
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

    @BelongsTo(() => Appointment, {
        // onUpdate: "CASCADE",
        onDelete: "CASCADE",
        // hooks: true
    })
    appointment: Appointment;
}
