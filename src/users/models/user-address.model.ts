import { Table, Model, ForeignKey, Column, BelongsTo } from "sequelize-typescript";
import { User } from "./user.model";
import { Address } from "./address.model";

@Table
export class UserAddress extends Model<UserAddress> {

    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column
    type: string;

    @ForeignKey(() => Address)
    addressId: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Address)
    address: Address;
}