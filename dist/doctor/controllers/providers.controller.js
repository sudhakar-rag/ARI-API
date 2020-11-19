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
exports.ProvidersController = void 0;
const provider_dto_1 = require("./../dto/provider.dto");
const provider_service_1 = require("./../services/provider.service");
const common_1 = require("@nestjs/common");
const response_data_1 = require("./../../core/common/response-data");
const create_provider_service_1 = require("../services/create-provider.service");
const appointment_availability_dto_1 = require("../dto/appointment-availability.dto");
const swagger_1 = require("@nestjs/swagger");
const list_query_params_dto_1 = require("../../core/common/list-query-params.dto");
let ProvidersController = class ProvidersController {
    constructor(providerService, createProviderService) {
        this.providerService = providerService;
        this.createProviderService = createProviderService;
    }
    async getSettings(providerId) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.getProviderSettings(providerId);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getProviderById(userId) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.getProviderById(userId);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getProviderRatingById(userId) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.getProviderRatingById(userId);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getProviders(queryParams) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.getProviders(queryParams);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getAppointments(queryParams) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.getAppointments(queryParams);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async create(providerData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createProviderService.createProvider(providerData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async setAvailability(availabilityData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.saveAvailability(availabilityData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async setSettings(settingsData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.saveSettings(settingsData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateBasicInfo(providerData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createProviderService.updateBasicInfo(providerData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateTraining(providerData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createProviderService.updateTraining(providerData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateReferences(providerData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createProviderService.updateReferences(providerData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateBackground(providerData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createProviderService.updateBackground(providerData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateCulturalBackground(providerData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createProviderService.updateCulturalBackground(providerData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateAffilations(providerData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createProviderService.updateAffilations(providerData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateStatus(providerData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createProviderService.updateStatus(providerData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async verifyProvider(providerData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.verifyProvider(providerData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getAvailability(providerId) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.getAvailability(providerId);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getAvailabilityByDay(params) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.getAvailabilityByDay(params);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async deleteProvider(id) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.deleteProvider(id);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'list provider settings' }),
    swagger_1.ApiBody({}),
    swagger_1.ApiCreatedResponse({
        type: response_data_1.ResponseData,
    }),
    common_1.Get('settings/:providerId'),
    __param(0, common_1.Param('providerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "getSettings", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "getProviderById", null);
__decorate([
    common_1.Get('rating/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "getProviderRatingById", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'returns providers list' }),
    swagger_1.ApiBody({ type: list_query_params_dto_1.ListQueryParamsDto }),
    swagger_1.ApiCreatedResponse({
        description: 'provider list.',
        type: response_data_1.ResponseData,
    }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_query_params_dto_1.ListQueryParamsDto]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "getProviders", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'returns appointments list' }),
    swagger_1.ApiBody({ type: list_query_params_dto_1.ListQueryParamsDto }),
    swagger_1.ApiCreatedResponse({
        description: 'provider list.',
        type: response_data_1.ResponseData,
    }),
    common_1.Post('appointment-list'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_query_params_dto_1.ListQueryParamsDto]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "getAppointments", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [provider_dto_1.ProviderDto]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'sets the appointment availability settings of a provider' }),
    swagger_1.ApiBody({ type: appointment_availability_dto_1.AppointmentAvailabilityDto }),
    swagger_1.ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: appointment_availability_dto_1.AppointmentAvailabilityDto,
    }),
    common_1.Post('set-availability'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointment_availability_dto_1.AppointmentAvailabilityDto]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "setAvailability", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'updates provider settings' }),
    swagger_1.ApiBody({ type: appointment_availability_dto_1.ProviderSettingsDto }),
    swagger_1.ApiCreatedResponse({
        description: 'The record has been successfully updated.',
        type: appointment_availability_dto_1.ProviderSettingsDto,
    }),
    common_1.Post('settings'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointment_availability_dto_1.ProviderSettingsDto]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "setSettings", null);
__decorate([
    common_1.Put('basicInfo'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "updateBasicInfo", null);
__decorate([
    common_1.Put('training'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "updateTraining", null);
__decorate([
    common_1.Put('references'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "updateReferences", null);
__decorate([
    common_1.Put('background'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "updateBackground", null);
__decorate([
    common_1.Put('culturalBackground'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "updateCulturalBackground", null);
__decorate([
    common_1.Put('affilations'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "updateAffilations", null);
__decorate([
    common_1.Put('status'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "updateStatus", null);
__decorate([
    common_1.Put('verifyStatus'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "verifyProvider", null);
__decorate([
    common_1.Get('get-availability/:providerId'),
    __param(0, common_1.Param('providerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "getAvailability", null);
__decorate([
    common_1.Post('availability-by-day'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "getAvailabilityByDay", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "deleteProvider", null);
ProvidersController = __decorate([
    swagger_1.ApiTags('provider'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('provider'),
    __metadata("design:paramtypes", [provider_service_1.ProviderService,
        create_provider_service_1.CreateProviderService])
], ProvidersController);
exports.ProvidersController = ProvidersController;
//# sourceMappingURL=providers.controller.js.map