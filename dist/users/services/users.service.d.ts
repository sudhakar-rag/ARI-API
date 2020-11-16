import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../models/user.model';
import { UserAddress } from '../models/user-address.model';
import { Address } from '../models/address.model';
import { Provider } from '@app/src/doctor/models/provider.model';
export declare class UsersService {
    private readonly userModel;
    private readonly providerModel;
    private readonly userAddressModel;
    private readonly addressModel;
    private readonly sequelize;
    private loggedinUserData;
    constructor(userModel: typeof User, providerModel: typeof Provider, userAddressModel: typeof UserAddress, addressModel: typeof Address, sequelize: Sequelize);
    setLoggedinUserData(rawData: User): any;
    getLoggedinUserData(): any;
    getLoggedinUserName(): any;
    isAdmin(): boolean;
    isProvider(): boolean;
    isPatient(): boolean;
    getLoggedinUserId(): any;
    getLoggedinPatientId(): any;
    getLoggedinProviderId(): any;
    getUser(userId: number): any;
    listVendors(queryParams: any): Promise<any>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(where: any): Promise<User>;
    remove(id: string): Promise<void>;
    verifyUser(data: any): Promise<any>;
    updatePassword(data: any): Promise<any>;
    updateProfilePicture(data: any): Promise<any>;
    finProvider(where: any): Promise<Provider>;
}
