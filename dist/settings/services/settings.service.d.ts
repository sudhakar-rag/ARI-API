import { GeneralSetting } from '../models/general-settings.model';
import { Tax } from '@app/src/shared/models/tax.model';
export declare class SettingsService {
    private readonly generalSettingModel;
    private readonly taxModel;
    constructor(generalSettingModel: typeof GeneralSetting, taxModel: typeof Tax);
    findAll(): Promise<any>;
    saveSettings(settings: any): Promise<any>;
    listTax(): Promise<any>;
    saveTax(data: any, id: number): Promise<any>;
}
