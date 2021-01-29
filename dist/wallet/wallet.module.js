"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const wallet_model_1 = require("./models/wallet.model");
const wallet_claim_model_1 = require("./models/wallet-claim.model");
const wallet_history_model_1 = require("./models/wallet-history.model");
const users_module_1 = require("../users/users.module");
const wallet_controller_1 = require("./controllers/wallet.controller");
const wallet_service_1 = require("./services/wallet.service");
const provider_module_1 = require("../doctor/provider.module");
let WalletModule = class WalletModule {
};
WalletModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                wallet_model_1.Wallet,
                wallet_claim_model_1.WalletClaim,
                wallet_history_model_1.WalletHistory
            ]),
            users_module_1.UsersModule,
            provider_module_1.ProviderModule
        ],
        controllers: [
            wallet_controller_1.WalletController
        ],
        providers: [
            wallet_service_1.WalletService
        ],
        exports: []
    })
], WalletModule);
exports.WalletModule = WalletModule;
//# sourceMappingURL=wallet.module.js.map