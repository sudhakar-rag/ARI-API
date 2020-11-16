import { Model } from 'sequelize-typescript';
export declare class Role extends Model<Role> {
    name: string;
    permissions: string;
}
