import { Table, Column, Model, HasMany, DataType, BelongsToMany } from 'sequelize-typescript';
import { UserGroup } from './user-group.model';
import { User } from './user.model';
@Table
export class Group extends Model<Group> {
    @Column
    name: string;

    @Column
    status: boolean;

    @BelongsToMany(() => User, () => UserGroup)
    users: Array<User & { userGroup: UserGroup }>;
}