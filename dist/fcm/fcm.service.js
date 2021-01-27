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
exports.FcmService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const config_service_1 = require("../core/config/config.service");
const user_fcm_token_model_1 = require("../users/models/user-fcm-token.model");
const user_model_1 = require("../users/models/user.model");
let FcmService = class FcmService {
    constructor(httpService, configService, userModel, userFCMTokenModel) {
        this.httpService = httpService;
        this.configService = configService;
        this.userModel = userModel;
        this.userFCMTokenModel = userFCMTokenModel;
    }
    sendMessage(data) {
        return new Promise(async (resolve) => {
            const key = this.configService.get('FCM_SERVER_KEY');
            const endpoint = 'https://fcm.googleapis.com/fcm/send';
            const result = await this.userFCMTokenModel.findAll({
                where: {
                    userId: data.userId
                }
            });
            const tokens = [];
            for (const row of result) {
                tokens.push(row.token);
            }
            const params = {
                notification: {
                    title: data.title,
                    body: data.body
                },
                registration_ids: tokens,
                data: data
            };
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `key=${key}`
            };
            return this.httpService.post(endpoint, params, { headers: headers }).pipe(operators_1.map((resp) => {
                return resp.data || {};
            }), operators_1.catchError(error => {
                console.log(error);
                return rxjs_1.of({});
            })).subscribe((data) => {
                resolve(data);
            });
        });
    }
};
FcmService = __decorate([
    common_1.Injectable(),
    __param(2, sequelize_1.InjectModel(user_model_1.User)),
    __param(3, sequelize_1.InjectModel(user_fcm_token_model_1.UserFCMToken)),
    __metadata("design:paramtypes", [common_1.HttpService,
        config_service_1.ConfigService, Object, Object])
], FcmService);
exports.FcmService = FcmService;
//# sourceMappingURL=fcm.service.js.map