import { User } from './../../users/models/user.model';
import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey
} from 'sequelize-typescript';

@Table
export class Payment extends Model<Payment> {

    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column(DataType.ENUM('S', 'P'))
    type: 'S' | 'P'

    @Column(DataType.DECIMAL(10, 2))
    amount: number;

    @Column(DataType.TEXT({ length: 'medium' }))
    txnId: string;

    @Column(DataType.ENUM('PENDING', 'COMPLETED'))
    status: 'PENDING' | 'COMPLETED'
}
