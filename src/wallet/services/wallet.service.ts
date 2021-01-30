import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { Wallet } from '../models/wallet.model';
import { InjectModel } from '@nestjs/sequelize';
import { WalletHistory } from '../models/wallet-history.model';
import { WalletClaim } from '../models/wallet-claim.model';
import { UsersService } from '@app/src/users/services/users.service';
import { User } from '@app/src/users/models/user.model';
import { walletClaimEntryDto, walletEntryDto } from '../dto/wallet.dto';
import { SearchDto } from '@app/src/core/common/search.data';

@Injectable()
export class WalletService {

    constructor(
        @InjectModel(Wallet)
        private readonly walletModel: typeof Wallet,
        @InjectModel(WalletHistory)
        private readonly walletHistoryModel: typeof WalletHistory,
        @InjectModel(WalletClaim)
        private readonly walletClaimModel: typeof WalletClaim,
        private usersService: UsersService
    ) {

    }

    async getWalletData(userId: number): Promise<any> {
        let wallet: any = await this.walletModel.findOne({
            include: [User],
            where: { userId: userId }
        });

        if (!wallet) {
            await this.walletModel.create({ userId: userId, balance: 0 });
            wallet = await this.walletModel.findOne({
                include: [User],
                where: { userId: userId }
            });
        }

        let lastClaim;
        if (wallet) {
            lastClaim = await this.getLastClaimByWalletId(wallet.id);
        }

        return { wallet, lastClaim };
    }

    async createWallet(userId: number): Promise<any> {
        let wallet: any = await this.walletModel.findOne({
            include: [User],
            where: { userId: userId }
        });

        if (!wallet) {
            await this.walletModel.create({ userId: userId, balance: 0 });
            wallet = await this.walletModel.findOne({
                include: [User],
                where: { userId: userId }
            });
        }

        return wallet;
    }

    async getLastClaimByWalletId(walletId: string): Promise<any> {
        const lastEntry: WalletClaim = await this.walletClaimModel.findOne({
            where: {
                walletId: walletId
            },
            order: [['id', 'DESC']]
        });

        return lastEntry;
    }

    async listWalletts(queryParams: SearchDto): Promise<any> {
        const searchText = queryParams.queryString || '';

        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';

        const orders = await this.walletModel.findAndCountAll({
            include: [{
                model: User,
                where: {
                    [Op.or]: [
                        {
                            userName: { [Op.like]: '%' + searchText + '%' }
                        },
                        {
                            firstName: { [Op.like]: '%' + searchText + '%' }
                        },
                        {
                            lastName: { [Op.like]: '%' + searchText + '%' }
                        },
                        {
                            email: { [Op.like]: '%' + searchText + '%' }
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

    async listWallettHistory(walletId, queryParams: any): Promise<any> {
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

    async listWallettClaims(queryParams: any): Promise<any> {
        let searchText = queryParams.queryString || '';

        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        let offset = parseInt(queryParams.pageNumber) * parseInt(queryParams.pageSize);
        let limit = parseInt(queryParams.pageSize);
        let sortField = queryParams.sortField || 'id';
        let sortOrder = queryParams.sortOrder || 'desc';

        let where: any = {};
        if (this.usersService.isAdmin()) {

        } else {
            where.userId = this.usersService.getLoggedinUserId();
        }

        let orders = await this.walletClaimModel.findAndCountAll({
            include: [{
                model: Wallet,
                required: true,
                where: where,
                include: [
                    {
                        model: User,
                        required: true,
                        where: {
                            [Op.or]: [
                                {
                                    userName: { [Op.like]: '%' + searchText + '%' }
                                },
                                {
                                    firstName: { [Op.like]: '%' + searchText + '%' }
                                },
                                {
                                    lastName: { [Op.like]: '%' + searchText + '%' }
                                },
                                {
                                    email: { [Op.like]: '%' + searchText + '%' }
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

    async createClaimEntry(walletClaimEntryData: walletClaimEntryDto): Promise<any> {

        let data = {
            walletId: walletClaimEntryData.walletId,
            amount: walletClaimEntryData.amount,
            status: walletClaimEntryData.status || 'PENDING'
        }

        await this.walletClaimModel.create(data);

        return data;
    }

    async updateClaimEntry(id, walletClaimEntryData: walletClaimEntryDto): Promise<any> {

        let data = {
            walletId: walletClaimEntryData.walletId,
            amount: walletClaimEntryData.amount,
            status: walletClaimEntryData.status || 'PENDING'
        }

        await this.walletClaimModel.update(data, { where: { id: id } });

        return data;
    }

    async createEntry(walletEntryData: walletEntryDto): Promise<any> {

        let lastEntry: WalletHistory = await this.walletHistoryModel.findOne({
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
        }

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
}
