"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FcmModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_module_1 = require("../core/config/config.module");
const user_fcm_token_model_1 = require("../users/models/user-fcm-token.model");
const user_model_1 = require("../users/models/user.model");
const fcm_service_1 = require("./fcm.service");
let FcmModule = class FcmModule {
};
FcmModule = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule,
            config_module_1.ConfigModule.register({ folder: './config' }),
            sequelize_1.SequelizeModule.forFeature([
                user_model_1.User,
                user_fcm_token_model_1.UserFCMToken
            ]),
        ],
        providers: [fcm_service_1.FcmService],
        exports: [fcm_service_1.FcmService]
    })
], FcmModule);
exports.FcmModule = FcmModule;
//# sourceMappingURL=fcm.module.js.map