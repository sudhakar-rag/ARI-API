import { Table, ForeignKey, Column, Model, BelongsTo } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class UserBankDetail extends Model<UserBankDetail> {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column
    name: string;

    @Column
    bankName: string;

    @Column
    accountId: string;

    @Column
    branch: string;

    @Column
    ifsc: string;

    @Column
    pan: string;

    @BelongsTo(() => User)
    user: User;

}