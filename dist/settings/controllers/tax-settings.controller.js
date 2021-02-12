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
exports.TaxSettingsController = void 0;
const common_1 = require("@nestjs/common");
const settings_service_1 = require("../services/settings.service");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const tax_dto_1 = require("../dto/tax.dto");
let TaxSettingsController = class TaxSettingsController {
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    async list() {
        return await this.settingsService.listTax();
    }
    async saveSettings(id, settings) {
        return await this.settingsService.saveTax(settings, id);
    }
};
__decorate([
    common_1.Get('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaxSettingsController.prototype, "list", null);
__decorate([
    common_1.Post('save/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tax_dto_1.SaveTaxDto]),
    __metadata("design:returntype", Promise)
], TaxSettingsController.prototype, "saveSettings", null);
TaxSettingsController = __decorate([
    common_1.Controller('tax-settings'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [settings_service_1.SettingsService])
], TaxSettingsController);
exports.TaxSettingsController = TaxSettingsController;
//# sourceMappingURL=tax-settings.controller.js.map