import { Model } from "sequelize-typescript";
import { User } from "./user.model";
export declare class UserFCMToken extends Model<UserFCMToken> {
    userId: number;
    token: string;
    type: 'D' | 'A' | 'I';
    user: User;
}
