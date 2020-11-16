import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto, CreateVendorDto, CreateAddressDto } from '../dto/create-user.dto';
import { User } from '../models/user.model';
import { UserRole } from '../models/user-role.model';
import { UserAddress } from '../models/user-address.model';
import { Address } from '../models/address.model';
import { Transaction } from 'sequelize/types';
export declare class UserCreateService {
    private readonly userModel;
    private readonly userAddressModel;
    private readonly addressModel;
    private readonly userRoleModel;
    private readonly sequelize;
    private loggedinUserData;
    constructor(userModel: typeof User, userAddressModel: typeof UserAddress, addressModel: typeof Address, userRoleModel: typeof UserRole, sequelize: Sequelize);
    setLoggedinUserData(user: User): void;
    getLoggedinUserData(): User;
    getUser(userId: any): Promise<User>;
    saveVendor(createVendorData: CreateVendorDto): Promise<User>;
    saveUser(createUserData: CreateUserDto, action: string, transaction: Transaction, userRole?: any): Promise<User>;
    saveUserAddress(addressData: CreateAddressDto, transaction: Transaction): Promise<any>;
}
