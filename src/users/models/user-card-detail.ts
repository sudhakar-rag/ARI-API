import { Table, ForeignKey, Column, Model, BelongsTo } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class UserCardDetail extends Model<UserCardDetail> {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column
    name: string;

    @Column
    cardNo: string;

    @Column
    expiry: string;

    @Column
    cvv: string;

    @BelongsTo(() => User)
    user: User;

}