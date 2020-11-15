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
exports.AppController = exports.RoleData = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const class_validator_1 = require("class-validator");
const config_1 = require("@nestjs/config");
class RoleData {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], RoleData.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RoleData.prototype, "name", void 0);
exports.RoleData = RoleData;
let AppController = class AppController {
    constructor(appService, configService) {
        this.appService = appService;
        this.configService = configService;
    }
    getHello() {
        return this.appService.getHello();
    }
    samplePost(data) {
        const dbUser = this.configService.get('app.env') || 'll5';
        return { dbUser };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RoleData]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "samplePost", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        config_1.ConfigService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map