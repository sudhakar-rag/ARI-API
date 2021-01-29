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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../../users/models/user.model");
const wallet_history_model_1 = require("./wallet-history.model");
const wallet_claim_model_1 = require("./wallet-claim.model");
const provider_model_1 = require("../../doctor/models/provider.model");
let Wallet = class Wallet extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => provider_model_1.Provider),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Wallet.prototype, "providerId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], Wallet.prototype, "balance", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => provider_model_1.Provider),
    __metadata("design:type", provider_model_1.Provider)
], Wallet.prototype, "provider", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => wallet_history_model_1.WalletHistory),
    __metadata("design:type", Array)
], Wallet.prototype, "history", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => wallet_claim_model_1.WalletClaim),
    __metadata("design:type", Array)
], Wallet.prototype, "claims", void 0);
Wallet = __decorate([
    sequelize_typescript_1.Table
], Wallet);
exports.Wallet = Wallet;
//# sourceMappingURL=wallet.model.js.map