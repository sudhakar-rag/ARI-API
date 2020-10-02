import { Table, Model, ForeignKey, Column, BelongsTo } from "sequelize-typescript";
import { Role } from "./role.model";
import { User } from "./user.model";

@Table
export class UserRole extends Model<UserRole> {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Role)
    @Column
    roleId: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Role)
    role: Role;
}