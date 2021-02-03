import { Model } from "sequelize-typescript";
import { User } from "@app/src/users/models/user.model";
import { WalletHistory } from "./wallet-history.model";
import { WalletClaim } from "./wallet-claim.model";
export declare class Wallet extends Model<Wallet> {
    userId: number;
    balance: number;
    user: User;
    history: WalletHistory[];
    claims: WalletClaim[];
}
