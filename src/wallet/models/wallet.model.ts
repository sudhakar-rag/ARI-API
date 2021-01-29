import { Table, Model, Column, ForeignKey, DataType, HasMany, HasOne, BelongsTo } from "sequelize-typescript";
import { User } from "@app/src/users/models/user.model";
import { WalletHistory } from "./wallet-history.model";
import { WalletClaim } from "./wallet-claim.model";
import { Provider } from "@app/src/doctor/models/provider.model";
@Table
export class Wallet extends Model<Wallet> {
    @ForeignKey(() => Provider)
    @Column
    providerId: number;

    @Column(DataType.DECIMAL(10, 2))
    balance: number;

    @BelongsTo(() => Provider)
    provider: Provider;

    @HasMany(() => WalletHistory)
    history: WalletHistory[]

    @HasMany(() => WalletClaim)
    claims: WalletClaim[]
}