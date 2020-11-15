import { Model } from "sequelize-typescript";
import { Role } from "./role.model";
import { User } from "./user.model";
export declare class UserRole extends Model<UserRole> {
    userId: number;
    roleId: number;
    user: User;
    role: Role;
}
