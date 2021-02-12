import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { State } from './state.model';

@Table
export class Tax extends Model<Tax> {
    @ForeignKey(() => State)
    @Column
    stateId: number;

    @Column(DataType.DECIMAL(10, 3))
    price: number;

    @Column(DataType.ENUM('F', 'P'))
    type: 'F' | 'P'

    @Column(DataType.BOOLEAN)
    status: boolean;

    @BelongsTo(() => State)
    state: State
}
