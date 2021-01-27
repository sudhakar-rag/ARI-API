import { CreateUserDto, CreateVendorDto } from '../dto/create-user.dto';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';
import { ResponseData } from '@app/src/core/common/response-data';
import { UserCreateService } from '../services/user-create.service';
import { CreateFCMDto } from '../dto/fcm.dto';
export declare class UsersController {
    private usersService;
    private userCreateService;
    constructor(usersService: UsersService, userCreateService: UserCreateService);
    create(createUserDto: CreateUserDto): Promise<User>;
    createVendor(createVendorData: CreateVendorDto): Promise<ResponseData>;
    listProducts(queryParams: any): Promise<ResponseData>;
    saveFCM(params: CreateFCMDto): Promise<ResponseData>;
    findAll(): Promise<User[]>;
    getLoggedInUserData(): Promise<any>;
    findOne(id: string): Promise<User>;
    remove(id: string): Promise<void>;
}
