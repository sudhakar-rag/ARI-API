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
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const wallet_model_1 = require("../models/wallet.model");
const sequelize_2 = require("@nestjs/sequelize");
const wallet_history_model_1 = require("../models/wallet-history.model");
const wallet_claim_model_1 = require("../models/wallet-claim.model");
const users_service_1 = require("../../users/services/users.service");
const user_model_1 = require("../../users/models/user.model");
const search_data_1 = require("../../core/common/search.data");
let WalletService = class WalletService {
    constructor(walletModel, walletHistoryModel, walletClaimModel, usersService) {
        this.walletModel = walletModel;
        this.walletHistoryModel = walletHistoryModel;
        this.walletClaimModel = walletClaimModel;
        this.usersService = usersService;
    }
    async findOne(where) {
        const wallet = await this.walletModel.findOne({ where: where });
        return wallet;
    }
    async getWalletData(userId) {
        let wallet = await this.walletModel.findOne({
            include: [user_model_1.User],
            where: { userId: userId }
        });
        if (!wallet) {
            await this.walletModel.create({ userId: userId, balance: 0 });
            wallet = await this.walletModel.findOne({
                include: [user_model_1.User],
                where: { userId: userId }
            });
        }
        let lastClaim;
        if (wallet) {
            lastClaim = await this.getLastClaimByWalletId(wallet.id);
        }
        return { wallet, lastClaim };
    }
    async createWallet(userId) {
        let wallet = await this.walletModel.findOne({
            include: [user_model_1.User],
            where: { userId: userId }
        });
        if (!wallet) {
            await this.walletModel.create({ userId: userId, balance: 0 });
            wallet = await this.walletModel.findOne({
                include: [user_model_1.User],
                where: { userId: userId }
            });
        }
        return wallet;
    }
    async getLastClaimByWalletId(walletId) {
        const lastEntry = await this.walletClaimModel.findOne({
            where: {
                walletId: walletId
            },
            order: [['id', 'DESC']]
        });
        return lastEntry;
    }
    async listWalletts(queryParams) {
        const searchText = queryParams.queryString || '';
        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';
        const orders = await this.walletModel.findAndCountAll({
            include: [{
                    model: user_model_1.User,
                    where: {
                        [sequelize_1.Op.or]: [
                            {
                                userName: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                            },
                            {
                                firstName: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                            },
                            {
                                lastName: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                            },
                            {
                                email: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                            }
                        ]
                    }
                }],
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
        return orders;
    }
    async listWallettHistory(walletId, queryParams) {
        let searchText = queryParams.queryString || '';
        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        let offset = parseInt(queryParams.pageNumber) * parseInt(queryParams.pageSize);
        let limit = parseInt(queryParams.pageSize);
        let sortField = queryParams.sortField || 'id';
        let sortOrder = queryParams.sortOrder || 'desc';
        let orders = await this.walletHistoryModel.findAndCountAll({
            where: { walletId: walletId },
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
        return orders;
    }
    async listWallettClaims(queryParams) {
        let searchText = queryParams.queryString || '';
        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        let offset = parseInt(queryParams.pageNumber) * parseInt(queryParams.pageSize);
        let limit = parseInt(queryParams.pageSize);
        let sortField = queryParams.sortField || 'id';
        let sortOrder = queryParams.sortOrder || 'desc';
        let where = {};
        if (this.usersService.isAdmin()) {
        }
        else {
            where.userId = this.usersService.getLoggedinUserId();
        }
        let orders = await this.walletClaimModel.findAndCountAll({
            include: [{
                    model: wallet_model_1.Wallet,
                    required: true,
                    where: where,
                    include: [
                        {
                            model: user_model_1.User,
                            required: true,
                            where: {
                                [sequelize_1.Op.or]: [
                                    {
                                        userName: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                                    },
                                    {
                                        firstName: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                                    },
                                    {
                                        lastName: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                                    },
                                    {
                                        email: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                                    }
                                ]
                            }
                        }
                    ]
                }],
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
        return orders;
    }
    async createClaimEntry(walletClaimEntryData) {
        let data = {
            walletId: walletClaimEntryData.walletId,
            amount: walletClaimEntryData.amount,
            status: walletClaimEntryData.status || 'PENDING'
        };
        await this.walletClaimModel.create(data);
        return data;
    }
    async updateClaimEntry(id, walletClaimEntryData) {
        let data = {
            walletId: walletClaimEntryData.walletId,
            amount: walletClaimEntryData.amount,
            status: walletClaimEntryData.status || 'PENDING'
        };
        await this.walletClaimModel.update(data, { where: { id: id } });
        return data;
    }
    async createEntry(walletEntryData) {
        let lastEntry = await this.walletHistoryModel.findOne({
            where: {
                walletId: walletEntryData.walletId
            },
            order: [['id', 'DESC']]
        });
        let data = {
            walletId: walletEntryData.walletId,
            openingBalance: 0,
            credit: 0,
            debit: 0,
            closingBalance: 0,
            note: walletEntryData.note || ''
        };
        if (lastEntry) {
            data.openingBalance = parseFloat('' + lastEntry.closingBalance);
        }
        if (walletEntryData.type == 'C') {
            data.credit = parseFloat('' + walletEntryData.amount);
        }
        if (walletEntryData.type == 'D') {
            data.debit = parseFloat('' + walletEntryData.amount);
        }
        data.closingBalance = data.openingBalance + data.credit - data.debit;
        await this.walletHistoryModel.create(data);
        await this.walletModel.update({
            balance: data.closingBalance
        }, {
            where: { id: walletEntryData.walletId }
        });
        return data;
    }
};
WalletService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_2.InjectModel(wallet_model_1.Wallet)),
    __param(1, sequelize_2.InjectModel(wallet_history_model_1.WalletHistory)),
    __param(2, sequelize_2.InjectModel(wallet_claim_model_1.WalletClaim)),
    __metadata("design:paramtypes", [Object, Object, Object, users_service_1.UsersService])
], WalletService);
exports.WalletService = WalletService;
//# sourceMappingURL=wallet.service.js.map