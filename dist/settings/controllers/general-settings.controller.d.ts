import { SettingsService } from '../services/settings.service';
export declare class GeneralSettingsController {
    private settingsService;
    constructor(settingsService: SettingsService);
    list(): Promise<any>;
    saveSettings(settings: any): Promise<any>;
}
