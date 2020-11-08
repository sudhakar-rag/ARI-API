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
export class Attachments extends Model<Attachments> {

    @ForeignKey(() => Appointment)
    @Column
    appointmentId: number;

    @Column
    type: string;

    @Column
    fileName: string;

    @Column
    fileUrl: string;

    @Column
    uploadedBy: number;

    @BelongsTo(() => Appointment)
    appointment: Appointment;
}
