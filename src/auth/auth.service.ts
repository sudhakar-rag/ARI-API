import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async login(where: any): Promise<any> {
        return await this.usersService.findOne(where)
    }

    async getUser(userId: any): Promise<any> {
        return await this.usersService.getUser(userId);
    }

}
