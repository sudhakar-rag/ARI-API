import { Table, Model, Column, HasMany, BelongsToMany } from "sequelize-typescript";
import { UserRole } from "./user-role.model";
import { UserBankDetail } from "./user-bank-detail";
import { UserAddress } from "./user-address.model";
import { Role } from "./role.model";

@Table
export class User extends Model<User> {
    @Column
    userName: string;

    @Column
    email: string;

    @Column
    password: string;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    picture: string;

    @Column
    phone: string;

    @Column
    status: number;

    @HasMany(() => UserRole)
    userRoles: UserRole[]

    @HasMany(() => UserBankDetail)
    userBankDetails: UserBankDetail[]

    @HasMany(() => UserAddress)
    UserAddresses: UserAddress[]

    @BelongsToMany(() => Role, () => UserRole)
    roles: Array<Role & { userRole: UserRole }>;

    //   @BelongsToMany(() => Group, () => UserGroup)
    //   groups: Array<Group & { userGroup: UserGroup }>;
}