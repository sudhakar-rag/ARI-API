import { Model } from "sequelize-typescript";
import { Wallet } from "./wallet.model";
export declare class WalletClaim extends Model<WalletClaim> {
    walletId: number;
    amount: number;
    status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
    wallet: Wallet;
}
