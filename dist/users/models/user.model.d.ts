import { Provider } from './../../doctor/models/provider.model';
import { Model } from "sequelize-typescript";
import { UserRole } from "./user-role.model";
import { UserAddress } from "./user-address.model";
import { Role } from "./role.model";
import { UserCardDetail } from "./user-card-detail";
import { Patient } from '@app/src/patient/models/patient.model';
export declare class User extends Model<User> {
    userName: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    picture: string;
    phone: string;
    status: number;
    userRoles: UserRole[];
    userBankDetails: UserCardDetail[];
    UserAddresses: UserAddress[];
    roles: Array<Role & {
        userRole: UserRole;
    }>;
    provider: Provider;
    patient: Patient;
}
