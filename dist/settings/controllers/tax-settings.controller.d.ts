import { SettingsService } from '../services/settings.service';
import { SaveTaxDto } from '../dto/tax.dto';
export declare class TaxSettingsController {
    private settingsService;
    constructor(settingsService: SettingsService);
    list(): Promise<any>;
    saveSettings(id: number, settings: SaveTaxDto): Promise<any>;
}
