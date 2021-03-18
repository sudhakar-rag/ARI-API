import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/services/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService
    ) { }

    async login(where: any): Promise<any> {
        return await this.usersService.findOne(where)
    }

    async getUser(userId: any): Promise<any> {
        return await this.usersService.getUser(userId);
    }

    async updatePassword(data: any): Promise<any> {

        return await this.usersService.updatePassword(data);

    }

    async verifyPassword(data: any): Promise<any> {

        return await this.usersService.verifyUser(data);

    }



}
