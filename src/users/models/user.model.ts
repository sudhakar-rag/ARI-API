import { Table, Model, Column, HasMany, BelongsToMany } from "sequelize-typescript";
import { UserRole } from "./user-role.model";
import { UserAddress } from "./user-address.model";
import { Role } from "./role.model";
import { UserCardDetail } from "./user-card-detail";

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

    @HasMany(() => UserCardDetail)
    userBankDetails: UserCardDetail[]

    @HasMany(() => UserAddress)
    UserAddresses: UserAddress[]

    @BelongsToMany(() => Role, () => UserRole)
    roles: Array<Role & { userRole: UserRole }>;

    //   @BelongsToMany(() => Group, () => UserGroup)
    //   groups: Array<Group & { userGroup: UserGroup }>;
}