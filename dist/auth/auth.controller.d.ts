import { LoginRequestData } from './dto/login-request-data';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ResponseData } from '../core/common/response-data';
export declare class AuthController {
    private authService;
    private readonly jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    login(loginData: LoginRequestData): Promise<ResponseData>;
    updatePassword(userData: any): Promise<ResponseData>;
    verifyPassword(userData: any): Promise<ResponseData>;
    forgotPassword(): {
        testing: string;
    };
    testing(): {
        testing: string;
    };
}
