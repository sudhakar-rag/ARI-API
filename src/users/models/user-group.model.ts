import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Group } from './group.model';
import { User } from './user.model';

@Table
export class UserGroup extends Model<UserGroup> {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Group)
    @Column
    groupId: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Group)
    group: Group;
}