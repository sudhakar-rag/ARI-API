import { Controller, Post, Body, Get } from '@nestjs/common';
import { LoginRequestData } from './dto/login-request-data';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ResponseData } from '../core/common/response-data';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private readonly jwtService: JwtService,
    ) { }

    @Post('login')
    async login(@Body() loginData: LoginRequestData) {

        let output = new ResponseData();

        try {

            let user = await this.authService.login({ email: loginData.email });

            if (!user) {
                throw "User does not exist.";
            }

            if (loginData.password != user.password) {
                throw "Incorrect password.";
            }

            output.data.token = this.jwtService.sign({ user: { id: user.id } });

            output.data.user = await this.authService.getUser(user.id);

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }

    @Get('testing')
    testing() {
        return { testing: 'testing...........' }
    }
}
