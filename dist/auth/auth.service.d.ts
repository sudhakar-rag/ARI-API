import { UsersService } from '../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(where: any): Promise<any>;
    getUser(userId: any): Promise<any>;
    updatePassword(data: any): Promise<any>;
    verifyPassword(data: any): Promise<any>;
}
