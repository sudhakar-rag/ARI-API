import { Strategy } from 'passport-jwt';
import { UsersService } from '../users/services/users.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: any): Promise<{
        user: any;
    }>;
}
export {};
