import { UsersService } from './../../users/services/users.service';
import { SettingsService } from '../services/settings.service';
export declare class GeneralSettingsController {
    private settingsService;
    private usersService;
    constructor(settingsService: SettingsService, usersService: UsersService);
    list(): Promise<any>;
    saveSettings(settings: any): Promise<any>;
}
