import { Model } from "sequelize-typescript";
import { User } from "./user.model";
import { Address } from "./address.model";
export declare class UserAddress extends Model<UserAddress> {
    userId: number;
    type: string;
    addressId: number;
    user: User;
    address: Address;
}
