import { Model } from "sequelize-typescript";
import { Wallet } from "./wallet.model";
export declare class WalletHistory extends Model<WalletHistory> {
    walletId: number;
    openingBalance: number;
    credit: number;
    debit: number;
    closingBalance: number;
    note: string;
    wallet: Wallet;
}
