import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { UsersService } from '../users/services/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        let userId = payload.user ? payload.user.id : 0;
        const user = await this.usersService.getUser(userId);
        // console.log('KAYAL', userId, user);
        if (user) {
            this.usersService.setLoggedinUserData(user);
            return { user };
        }
        return null;
        // return { userId: payload.sub, username: payload.username };
    }
}