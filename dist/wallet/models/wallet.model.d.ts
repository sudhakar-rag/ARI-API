import { Model } from "sequelize-typescript";
import { WalletHistory } from "./wallet-history.model";
import { WalletClaim } from "./wallet-claim.model";
import { Provider } from "@app/src/doctor/models/provider.model";
export declare class Wallet extends Model<Wallet> {
    providerId: number;
    balance: number;
    provider: Provider;
    history: WalletHistory[];
    claims: WalletClaim[];
}
