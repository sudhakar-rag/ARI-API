/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { UsersService } from './../../users/services/users.service';
import { Controller, Get, Post, Body, UseGuards, Param, ParseIntPipe } from '@nestjs/common';
import { SettingsService } from '../services/settings.service';
import { JwtAuthGuard } from '@app/src/auth/guards/jwt-auth.guard';
import { SaveTaxDto } from '../dto/tax.dto';

@Controller('tax-settings')
@UseGuards(JwtAuthGuard)
export class TaxSettingsController {
    constructor(
        private settingsService: SettingsService
    ) { }

    @Get('list')
    async list(): Promise<any> {
        return await this.settingsService.listTax();
    }


    @Post('save/:id')
    async saveSettings(@Param('id', ParseIntPipe) id: number, @Body() settings: SaveTaxDto): Promise<any> {
        return await this.settingsService.saveTax(settings, id);
    }


}
