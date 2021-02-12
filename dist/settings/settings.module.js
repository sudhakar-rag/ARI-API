"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("../users/users.module");
const general_settings_model_1 = require("./models/general-settings.model");
const general_settings_controller_1 = require("./controllers/general-settings.controller");
const settings_service_1 = require("./services/settings.service");
const tax_model_1 = require("../shared/models/tax.model");
const tax_settings_controller_1 = require("./controllers/tax-settings.controller");
let SettingsModule = class SettingsModule {
};
SettingsModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                general_settings_model_1.GeneralSetting,
                tax_model_1.Tax
            ]),
            users_module_1.UsersModule
        ],
        controllers: [
            general_settings_controller_1.GeneralSettingsController,
            tax_settings_controller_1.TaxSettingsController
        ],
        providers: [
            settings_service_1.SettingsService
        ]
    })
], SettingsModule);
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=settings.module.js.map