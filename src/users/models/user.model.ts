import { Provider } from './../../doctor/models/provider.model';
import { Table, Model, Column, HasMany, BelongsToMany, BelongsTo, HasOne } from "sequelize-typescript";
import { UserRole } from "./user-role.model";
import { UserAddress } from "./user-address.model";
import { Role } from "./role.model";
import { UserCardDetail } from "./user-card-detail";
import { Patient } from '@app/src/patient/models/patient.model';

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

    @HasOne(() => Provider)
    provider: Provider;

    @HasOne(() => Patient)
    patient: Patient;

    //   @BelongsToMany(() => Group, () => UserGroup)
    //   groups: Array<Group & { userGroup: UserGroup }>;
}