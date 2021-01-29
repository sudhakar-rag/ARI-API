import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { WalletService } from '../services/wallet.service';
import { UsersService } from '@app/src/users/services/users.service';
import { walletClaimEntryDto, walletEntryDto } from '../dto/wallet.dto';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';

@Controller('wallet')
export class WalletController {

    constructor(
        private walletService: WalletService,
        private usersService: UsersService
    ) { }

    @Get(':userId')
    async getWalletData(@Param('userId') userId: string): Promise<any> {
        if (this.usersService.isAdmin()) {
            userId = userId;
        } else {
            userId = this.usersService.getLoggedinUserId();
        }

        const wallet = await this.walletService.getWalletData(+userId);
        return wallet;
    }

    @Get('last-claim/:walletId')
    async getLastClaimByWalletId(@Param('walletId') walletId: string): Promise<any> {
        const wallet = await this.walletService.getLastClaimByWalletId(walletId);
        return wallet;
    }

    @Post('list')
    async walletList(@Body() params: ListQueryParamsDto): Promise<any> {
        const wallet = await this.walletService.listWalletts(params);
        return wallet;
    }

    @Post('claims')
    async walletClaims(@Body() params: ListQueryParamsDto): Promise<any> {
        const wallet = await this.walletService.listWallettClaims(params);
        return wallet;
    }

    @Post('history/:walletId')
    async listWalletHistory(@Param('walletId') walletId: string, @Body() body: ListQueryParamsDto): Promise<any> {
        // return { walletId: params.walletId, role: this.usersService.getLoggedinUserRole() };
        if (this.usersService.isAdmin()) {

        } else {
            const result = await this.walletService.getWalletData(this.usersService.getLoggedinUserId());
            walletId = result.wallet.id;
        }
        // return { walletId };
        const wallet = await this.walletService.listWallettHistory(walletId, body);
        return wallet;
    }

    @Post('claim')
    async createClaimEntry(@Body() walletClaimEntryData: walletClaimEntryDto): Promise<any> {
        const result = await this.walletService.createClaimEntry(walletClaimEntryData);
        return result;
    }

    @Post('update-claim/:claimId')
    async updateClaimEntry(@Param('claimId') claimId: string, @Body() walletClaimEntryData: walletClaimEntryDto): Promise<any> {
        const result = await this.walletService.updateClaimEntry(claimId, walletClaimEntryData);

        if (walletClaimEntryData.status == 'COMPLETED') {
            const data: walletEntryDto = {
                walletId: walletClaimEntryData.walletId,
                amount: walletClaimEntryData.amount,
                type: 'D',
                note: 'wallet claim'
            };

            await this.walletService.createEntry(data);

            const walletInfo = await this.walletService.getWalletData(data.walletId);
            // await this.smsService.sendWalletClaimApproval(data.amount, [walletInfo.wallet.user.phone]);
        }

        return result;
    }

    @Post('entry')
    async createEntry(@Body() walletEntryData: walletEntryDto): Promise<any> {
        const wallet = await this.walletService.createEntry(walletEntryData);
        return wallet;
    }
}
