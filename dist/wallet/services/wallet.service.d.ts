import { Wallet } from '../models/wallet.model';
import { WalletHistory } from '../models/wallet-history.model';
import { WalletClaim } from '../models/wallet-claim.model';
import { UsersService } from '@app/src/users/services/users.service';
import { walletClaimEntryDto, walletEntryDto } from '../dto/wallet.dto';
import { SearchDto } from '@app/src/core/common/search.data';
export declare class WalletService {
    private readonly walletModel;
    private readonly walletHistoryModel;
    private readonly walletClaimModel;
    private usersService;
    constructor(walletModel: typeof Wallet, walletHistoryModel: typeof WalletHistory, walletClaimModel: typeof WalletClaim, usersService: UsersService);
    findOne(where: any): Promise<Wallet>;
    getWalletData(userId: number): Promise<any>;
    createWallet(userId: number): Promise<any>;
    getLastClaimByWalletId(walletId: string): Promise<any>;
    listWalletts(queryParams: SearchDto): Promise<any>;
    listWallettHistory(walletId: any, queryParams: any): Promise<any>;
    listWallettClaims(queryParams: any): Promise<any>;
    createClaimEntry(walletClaimEntryData: walletClaimEntryDto): Promise<any>;
    updateClaimEntry(id: any, walletClaimEntryData: walletClaimEntryDto): Promise<any>;
    createEntry(walletEntryData: walletEntryDto): Promise<any>;
}
