import { UsersService } from './../../users/services/users.service';
import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { SettingsService } from '../services/settings.service';

@Controller('general-settings')
export class GeneralSettingsController {
    constructor(
        private settingsService: SettingsService
    ) { }

    @Get('list')
    async list() {
        return await this.settingsService.findAll();
    }


    @Post('save')
    async saveSettings(@Body() settings: any) {
        return await this.settingsService.saveSettings(settings);
    }


}
