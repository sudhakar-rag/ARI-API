import {
    Table,
    Column,
    Model,
    ForeignKey,
    DataType,
    BelongsTo
} from 'sequelize-typescript';
import { Appointment } from './appointment.model';

@Table
export class CallNotification extends Model<CallNotification> {
    @ForeignKey(() => Appointment)
    @Column
    appointmentId: number;

    @Column(DataType.TEXT({ length: 'medium' }))
    description: string;

    @Column(DataType.ENUM('PENDING', 'ACCEPTED', 'COMPLETED', 'CANCELLED'))
    status: 'PENDING' | 'ACCEPTED' | 'COMPLETED' | 'CANCELLED'

    @BelongsTo(() => Appointment)
    appointment: Appointment;
}
