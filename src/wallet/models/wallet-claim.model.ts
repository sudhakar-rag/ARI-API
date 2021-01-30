import { Table, Model, Column, ForeignKey, DataType, HasMany, HasOne, BelongsTo } from "sequelize-typescript";
import { Wallet } from "./wallet.model";
@Table
export class WalletClaim extends Model<WalletClaim> {
    @ForeignKey(() => Wallet)
    @Column
    walletId: number;

    @Column(DataType.DECIMAL(10, 2))
    amount: number;

    @Column(DataType.ENUM('PENDING', 'COMPLETED', 'CANCELLED'))
    status: 'PENDING' | 'COMPLETED' | 'CANCELLED';

    @BelongsTo(() => Wallet)
    wallet: Wallet
}