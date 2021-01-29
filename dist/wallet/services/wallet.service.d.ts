import { Wallet } from '../models/wallet.model';
import { WalletHistory } from '../models/wallet-history.model';
import { WalletClaim } from '../models/wallet-claim.model';
import { UsersService } from '@app/src/users/services/users.service';
import { walletClaimEntryDto, walletEntryDto } from '../dto/wallet.dto';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
export declare class WalletService {
    private readonly walletModel;
    private readonly walletHistoryModel;
    private readonly walletClaimModel;
    private usersService;
    constructor(walletModel: typeof Wallet, walletHistoryModel: typeof WalletHistory, walletClaimModel: typeof WalletClaim, usersService: UsersService);
    getWalletData(userId: number): Promise<any>;
    createWallet(userId: number): Promise<any>;
    getLastClaimByWalletId(walletId: string): Promise<any>;
    listWalletts(queryParams: ListQueryParamsDto): Promise<any>;
    listWallettHistory(walletId: any, queryParams: any): Promise<any>;
    listWallettClaims(queryParams: any): Promise<any>;
    createClaimEntry(walletClaimEntryData: walletClaimEntryDto): Promise<any>;
    updateClaimEntry(id: any, walletClaimEntryData: walletClaimEntryDto): Promise<any>;
    createEntry(walletEntryData: walletEntryDto): Promise<any>;
}
