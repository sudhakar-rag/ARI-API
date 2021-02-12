/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { GeneralSetting } from '../models/general-settings.model';
import { Tax } from '@app/src/shared/models/tax.model';
import { State } from '@app/src/shared/models/state.model';

@Injectable()
export class SettingsService {
    constructor(
        @InjectModel(GeneralSetting)
        private readonly generalSettingModel: typeof GeneralSetting,
        @InjectModel(Tax)
        private readonly taxModel: typeof Tax
    ) {

    }

    async findAll(): Promise<any> {
        return await this.generalSettingModel.findAll();
    }

    async saveSettings(settings): Promise<any> {

        await this.generalSettingModel.update(settings, {
            where: { id: 1 }
        });

        return await this.generalSettingModel.findAll();
    }

    async listTax(): Promise<any> {
        return await this.taxModel.findAll({
            include: [State]
        });
    }

    async saveTax(data: any, id: number): Promise<any> {

        await this.taxModel.update(data, {
            where: { id: id }
        });

        return await this.taxModel.findAll();
    }

}
