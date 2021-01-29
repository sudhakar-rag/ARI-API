import { Table, Model, Column, ForeignKey, DataType, HasMany, HasOne, BelongsTo } from "sequelize-typescript";
import { Wallet } from "./wallet.model";
@Table
export class WalletHistory extends Model<WalletHistory> {
    @ForeignKey(() => Wallet)
    @Column
    walletId: number;

    @Column(DataType.DECIMAL(10, 2))
    openingBalance: number;

    @Column(DataType.DECIMAL(10, 2))
    credit: number;

    @Column(DataType.DECIMAL(10, 2))
    debit: number;

    @Column(DataType.DECIMAL(10, 2))
    closingBalance: number;

    @Column(DataType.TEXT)
    note: string;

    @BelongsTo(() => Wallet)
    wallet: Wallet
}