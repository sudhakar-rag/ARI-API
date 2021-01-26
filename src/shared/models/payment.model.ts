import { User } from './../../users/models/user.model';
import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { Appointment } from './appointment.model';
import { Subscription } from './subscription.model';

@Table
export class Payment extends Model<Payment> {

    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column(DataType.ENUM('S', 'P'))
    type: 'S' | 'P'

    @Column(DataType.ENUM('S', 'A'))
    paymentType: 'S' | 'A'

    @ForeignKey(() => Appointment)
    @Column
    appointmentId: number;

    @ForeignKey(() => Subscription)
    @Column
    subscriptionId: number;

    @Column(DataType.DECIMAL(10, 2))
    amount: number;

    @Column(DataType.TEXT({ length: 'medium' }))
    txnId: string;

    @Column(DataType.ENUM('APPROVED', 'PENDING', 'CANCELLED', 'REFUNDED'))
    status: 'APPROVED' | 'PENDING' | 'CANCELLED' | 'REFUNDED'

    @BelongsTo(() => Subscription, {
        // onUpdate: "CASCADE",
        onDelete: "SET NULL"
    })
    subscription: Subscription;

    @BelongsTo(() => Appointment, {
        // onUpdate: "CASCADE",
        onDelete: "SET NULL"
    })
    appointment: Appointment;
}
