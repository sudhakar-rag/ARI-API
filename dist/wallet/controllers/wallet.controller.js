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
exports.WalletController = void 0;
const common_1 = require("@nestjs/common");
const wallet_service_1 = require("../services/wallet.service");
const users_service_1 = require("../../users/services/users.service");
const wallet_dto_1 = require("../dto/wallet.dto");
const search_data_1 = require("../../core/common/search.data");
let WalletController = class WalletController {
    constructor(walletService, usersService) {
        this.walletService = walletService;
        this.usersService = usersService;
    }
    async getWalletData(userId) {
        if (this.usersService.isAdmin()) {
            userId = userId;
        }
        else {
            userId = this.usersService.getLoggedinUserId();
        }
        const wallet = await this.walletService.getWalletData(+userId);
        return wallet;
    }
    async getLastClaimByWalletId(walletId) {
        const wallet = await this.walletService.getLastClaimByWalletId(walletId);
        return wallet;
    }
    async walletList(params) {
        const wallet = await this.walletService.listWalletts(params);
        return wallet;
    }
    async walletClaims(params) {
        const wallet = await this.walletService.listWallettClaims(params);
        return wallet;
    }
    async listWalletHistory(walletId, body) {
        if (this.usersService.isAdmin()) {
        }
        else {
            const result = await this.walletService.getWalletData(this.usersService.getLoggedinUserId());
            walletId = result.wallet.id;
        }
        const wallet = await this.walletService.listWallettHistory(walletId, body);
        return wallet;
    }
    async createClaimEntry(walletClaimEntryData) {
        const result = await this.walletService.createClaimEntry(walletClaimEntryData);
        return result;
    }
    async updateClaimEntry(claimId, walletClaimEntryData) {
        const result = await this.walletService.updateClaimEntry(claimId, walletClaimEntryData);
        if (walletClaimEntryData.status == 'COMPLETED') {
            const data = {
                walletId: walletClaimEntryData.walletId,
                amount: walletClaimEntryData.amount,
                type: 'D',
                note: 'wallet claim'
            };
            await this.walletService.createEntry(data);
            const wallet = await this.walletService.findOne({ id: data.walletId });
            const walletInfo = await this.walletService.getWalletData(wallet.userId);
        }
        return result;
    }
    async createEntry(walletEntryData) {
        const wallet = await this.walletService.createEntry(walletEntryData);
        return wallet;
    }
};
__decorate([
    common_1.Get(':userId'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getWalletData", null);
__decorate([
    common_1.Get('last-claim/:walletId'),
    __param(0, common_1.Param('walletId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getLastClaimByWalletId", null);
__decorate([
    common_1.Post('list'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_data_1.SearchDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "walletList", null);
__decorate([
    common_1.Post('claims'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_data_1.SearchDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "walletClaims", null);
__decorate([
    common_1.Post('history/:walletId'),
    __param(0, common_1.Param('walletId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, search_data_1.SearchDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "listWalletHistory", null);
__decorate([
    common_1.Post('claim'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wallet_dto_1.walletClaimEntryDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "createClaimEntry", null);
__decorate([
    common_1.Post('update-claim/:claimId'),
    __param(0, common_1.Param('claimId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, wallet_dto_1.walletClaimEntryDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "updateClaimEntry", null);
__decorate([
    common_1.Post('entry'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wallet_dto_1.walletEntryDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "createEntry", null);
WalletController = __decorate([
    common_1.Controller('wallet'),
    __metadata("design:paramtypes", [wallet_service_1.WalletService,
        users_service_1.UsersService])
], WalletController);
exports.WalletController = WalletController;
//# sourceMappingURL=wallet.controller.js.map