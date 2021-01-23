"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const login_request_data_1 = require("./dto/login-request-data");
const auth_service_1 = require("./auth.service");
const jwt_1 = require("@nestjs/jwt");
const response_data_1 = require("../core/common/response-data");
const email_service_1 = require("../email/email.service");
const config_service_1 = require("../core/config/config.service");
let AuthController = class AuthController {
    constructor(authService, emailService, configService, jwtService) {
        this.authService = authService;
        this.emailService = emailService;
        this.configService = configService;
        this.jwtService = jwtService;
    }
    async login(loginData) {
        let output = new response_data_1.ResponseData();
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
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updatePassword(userData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.authService.updatePassword(userData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async verifyPassword(userData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.authService.verifyPassword(userData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async forgotPassword(params) {
        const output = new response_data_1.ResponseData();
        try {
            let user = await this.authService.login({ email: params.email });
            if (!user) {
                throw 'Email does not exist.';
            }
            await this.emailService.sendForgotPasswordMail({
                email: user.email,
                id: user.id,
                link: this.configService.get('WEB_URL') + 'reset-password/',
                name: user.firstName + ' ' + user.lastName
            });
            output.data = params;
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    testing() {
        return { testing: 'testing...........' };
    }
};
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_request_data_1.LoginRequestData]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Put('resetPassword'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updatePassword", null);
__decorate([
    common_1.Post('verifyPassword'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyPassword", null);
__decorate([
    common_1.Post('forgotPassword'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    common_1.Get('testing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "testing", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        email_service_1.EmailService,
        config_service_1.ConfigService,
        jwt_1.JwtService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map