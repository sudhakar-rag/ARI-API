import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';
import { GeneralSetting } from './models/general-settings.model';
import { GeneralSettingsController } from './controllers/general-settings.controller';
import { SettingsService } from './services/settings.service';
import { Tax } from '../shared/models/tax.model';
import { TaxSettingsController } from './controllers/tax-settings.controller';

@Module({
    imports: [
        SequelizeModule.forFeature([
            GeneralSetting,
            Tax
        ]),
        UsersModule
    ],
    controllers: [
        GeneralSettingsController,
        TaxSettingsController
    ],
    providers: [
        SettingsService
    ]
})
export class SettingsModule { }
