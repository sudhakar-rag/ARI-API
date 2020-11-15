import { Model } from "sequelize-typescript";
import { User } from "./user.model";
export declare class UserCardDetail extends Model<UserCardDetail> {
    userId: number;
    name: string;
    cardNo: string;
    expiry: string;
    cvv: string;
    user: User;
}
