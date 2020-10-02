import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';
import { GeneralSetting } from './models/general-settings.model';
import { GeneralSettingsController } from './controllers/general-settings.controller';
import { SettingsService } from './services/settings.service';

@Module({
    imports: [
        SequelizeModule.forFeature([
            GeneralSetting
        ]),
        UsersModule
    ],
    controllers: [
        GeneralSettingsController
    ],
    providers: [
        SettingsService
    ]
})
export class SettingsModule { }
