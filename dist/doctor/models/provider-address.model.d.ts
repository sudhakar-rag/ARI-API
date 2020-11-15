import { Address } from "@app/src/users/models/address.model";
import { Model } from "sequelize-typescript";
import { Provider } from "./provider.model";
export declare class ProviderAddress extends Model<ProviderAddress> {
    providerId: number;
    type: string;
    addressId: number;
    provider: Provider;
    address: Address;
}
