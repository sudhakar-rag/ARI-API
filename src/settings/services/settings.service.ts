import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { GeneralSetting } from '../models/general-settings.model';

@Injectable()
export class SettingsService {
    constructor(
        @InjectModel(GeneralSetting)
        private readonly generalSettingModel: typeof GeneralSetting
    ) {

    }

    async findAll(): Promise<any> {
        return await this.generalSettingModel.findAll();
    }

    async saveSettings(settings): Promise<any> {

        let result = await this.generalSettingModel.update(settings, {
            where: { id: 1 }
        });
        return await this.generalSettingModel.findAll();
    }

}
