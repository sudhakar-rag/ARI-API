import { GeneralSetting } from '../models/general-settings.model';
export declare class SettingsService {
    private readonly generalSettingModel;
    constructor(generalSettingModel: typeof GeneralSetting);
    findAll(): Promise<any>;
    saveSettings(settings: any): Promise<any>;
}
