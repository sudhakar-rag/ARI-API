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
exports.WalletClaim = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const wallet_model_1 = require("./wallet.model");
let WalletClaim = class WalletClaim extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => wallet_model_1.Wallet),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], WalletClaim.prototype, "walletId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], WalletClaim.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('PENDING', 'COMPLETED', 'CANCELLED')),
    __metadata("design:type", String)
], WalletClaim.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => wallet_model_1.Wallet),
    __metadata("design:type", wallet_model_1.Wallet)
], WalletClaim.prototype, "wallet", void 0);
WalletClaim = __decorate([
    sequelize_typescript_1.Table
], WalletClaim);
exports.WalletClaim = WalletClaim;
//# sourceMappingURL=wallet-claim.model.js.map