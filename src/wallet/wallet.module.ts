import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Wallet } from './models/wallet.model';
import { WalletClaim } from './models/wallet-claim.model';
import { WalletHistory } from './models/wallet-history.model';
import { UsersModule } from '../users/users.module';
import { WalletController } from './controllers/wallet.controller';
import { WalletService } from './services/wallet.service';

@Module({
    imports: [
        SequelizeModule.forFeature([
            Wallet,
            WalletClaim,
            WalletHistory
        ]),
        UsersModule
    ],
    controllers: [
        WalletController
    ],
    providers: [
        WalletService
    ],
    exports: [
        WalletService
    ]
})
export class WalletModule { }
