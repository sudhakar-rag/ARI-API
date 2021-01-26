import { Table, ForeignKey, Column, Model, BelongsTo, DataType } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class UserFCMToken extends Model<UserFCMToken> {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column
    token: string;

    @Column(DataType.ENUM('D', 'A', 'I'))
    type: 'D' | 'A' | 'I'

    @BelongsTo(() => User)
    user: User;

}