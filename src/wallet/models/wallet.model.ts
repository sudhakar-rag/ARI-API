import { Table, Model, Column, ForeignKey, DataType, HasMany, HasOne, BelongsTo } from "sequelize-typescript";
import { User } from "@app/src/users/models/user.model";
import { WalletHistory } from "./wallet-history.model";
import { WalletClaim } from "./wallet-claim.model";
@Table
export class Wallet extends Model<Wallet> {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column(DataType.DECIMAL(10, 2))
    balance: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => WalletHistory)
    history: WalletHistory[]

    @HasMany(() => WalletClaim)
    claims: WalletClaim[]
}