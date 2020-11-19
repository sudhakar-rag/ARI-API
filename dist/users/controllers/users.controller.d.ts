import { CreateUserDto, CreateVendorDto } from '../dto/create-user.dto';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';
import { ResponseData } from '@app/src/core/common/response-data';
import { UserCreateService } from '../services/user-create.service';
export declare class UsersController {
    private usersService;
    private userCreateService;
    constructor(usersService: UsersService, userCreateService: UserCreateService);
    create(createUserDto: CreateUserDto): Promise<User>;
    createVendor(createVendorData: CreateVendorDto): Promise<ResponseData>;
    listProducts(queryParams: any): Promise<ResponseData>;
    findAll(): Promise<User[]>;
    getLoggedInUserData(): Promise<any>;
    findOne(id: string): Promise<User>;
    deleteUser(id: string): Promise<ResponseData>;
}
