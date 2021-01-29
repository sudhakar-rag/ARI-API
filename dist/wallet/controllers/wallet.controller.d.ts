import { WalletService } from '../services/wallet.service';
import { UsersService } from '@app/src/users/services/users.service';
import { walletClaimEntryDto, walletEntryDto } from '../dto/wallet.dto';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
export declare class WalletController {
    private walletService;
    private usersService;
    constructor(walletService: WalletService, usersService: UsersService);
    getWalletData(userId: string): Promise<any>;
    getLastClaimByWalletId(walletId: string): Promise<any>;
    walletList(params: ListQueryParamsDto): Promise<any>;
    walletClaims(params: ListQueryParamsDto): Promise<any>;
    listWalletHistory(walletId: string, body: ListQueryParamsDto): Promise<any>;
    createClaimEntry(walletClaimEntryData: walletClaimEntryDto): Promise<any>;
    updateClaimEntry(claimId: string, walletClaimEntryData: walletClaimEntryDto): Promise<any>;
    createEntry(walletEntryData: walletEntryDto): Promise<any>;
}
