import { Model } from 'sequelize-typescript';
import { Group } from './group.model';
import { User } from './user.model';
export declare class UserGroup extends Model<UserGroup> {
    userId: number;
    groupId: number;
    user: User;
    group: Group;
}
