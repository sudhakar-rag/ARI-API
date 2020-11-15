"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const general_settings_model_1 = require("../models/general-settings.model");
let SettingsService = class SettingsService {
    constructor(generalSettingModel) {
        this.generalSettingModel = generalSettingModel;
    }
    async findAll() {
        return await this.generalSettingModel.findAll();
    }
    async saveSettings(settings) {
        let result = await this.generalSettingModel.update(settings, {
            where: { id: 1 }
        });
        return await this.generalSettingModel.findAll();
    }
};
SettingsService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(general_settings_model_1.GeneralSetting)),
    __metadata("design:paramtypes", [Object])
], SettingsService);
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map