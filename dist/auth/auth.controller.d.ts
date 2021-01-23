import { LoginRequestData } from './dto/login-request-data';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ResponseData } from '../core/common/response-data';
import { EmailService } from '../email/email.service';
import { ConfigService } from '../core/config/config.service';
export declare class AuthController {
    private authService;
    private emailService;
    private configService;
    private readonly jwtService;
    constructor(authService: AuthService, emailService: EmailService, configService: ConfigService, jwtService: JwtService);
    login(loginData: LoginRequestData): Promise<ResponseData>;
    updatePassword(userData: any): Promise<ResponseData>;
    verifyPassword(userData: any): Promise<ResponseData>;
    forgotPassword(params: any): Promise<ResponseData>;
    testing(): {
        testing: string;
    };
}
