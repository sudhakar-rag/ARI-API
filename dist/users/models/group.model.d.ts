import { Model } from 'sequelize-typescript';
import { UserGroup } from './user-group.model';
import { User } from './user.model';
export declare class Group extends Model<Group> {
    name: string;
    status: boolean;
    users: Array<User & {
        userGroup: UserGroup;
    }>;
}
