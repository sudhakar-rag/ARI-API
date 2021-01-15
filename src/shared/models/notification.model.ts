import { User } from './../../users/models/user.model';
import { BelongsTo, DataType } from 'sequelize-typescript';
import {
    Table,
    Column,
    Model,
    ForeignKey,
} from 'sequelize-typescript';
import { Appointment } from './appointment.model';

@Table
export class Notification extends Model<Notification> {
    @ForeignKey(() => Appointment)
    @Column
    appointmentId: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column(DataType.TEXT({ length: 'medium' }))
    message: string;

    @Column
    status: boolean;

    @BelongsTo(() => Appointment)
    Appointment: Appointment;

    @BelongsTo(() => User)
    user: User;
}
