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
exports.SharedController = void 0;
const shared_service_1 = require("./../services/shared.service");
const common_1 = require("@nestjs/common");
const response_data_1 = require("../../core/common/response-data");
const users_service_1 = require("../../users/services/users.service");
let SharedController = class SharedController {
    constructor(sharedService, usersService) {
        this.sharedService = sharedService;
        this.usersService = usersService;
    }
    async getMedicalProblems() {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getMedicalProblems();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getSymptoms() {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getSymptoms();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getSpecialists() {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getSpecialists();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getLanaguages() {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getLanguages();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getServices() {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getServices();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getProviderTypes() {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getProviderTypes();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getStates() {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getStates();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getCountries() {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getCountries();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getSubscriptions() {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getSubscriptions();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getAddress(addressId) {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getAddressById(addressId);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateAppointmentDetails(appointmentData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.updateAppointmentSession(appointmentData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getAppointmentDetails(appointmentId) {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.getAppointmenteDetailsById(appointmentId);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updatePicture(userData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.usersService.updateProfilePicture(userData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateSub(subData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.sharedService.updateSubscription(subData);
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
    common_1.Get('getMedicalProblems'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getMedicalProblems", null);
__decorate([
    common_1.Get('getSymptoms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getSymptoms", null);
__decorate([
    common_1.Get('getSpecialists'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getSpecialists", null);
__decorate([
    common_1.Get('languages'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getLanaguages", null);
__decorate([
    common_1.Get('services'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getServices", null);
__decorate([
    common_1.Get('providerTypes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getProviderTypes", null);
__decorate([
    common_1.Get('states'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getStates", null);
__decorate([
    common_1.Get('countries'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getCountries", null);
__decorate([
    common_1.Get('subscriptions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getSubscriptions", null);
__decorate([
    common_1.Get('address/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getAddress", null);
__decorate([
    common_1.Post('appointmentDetails'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "updateAppointmentDetails", null);
__decorate([
    common_1.Get('appointmentDetails/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "getAppointmentDetails", null);
__decorate([
    common_1.Put('picture'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "updatePicture", null);
__decorate([
    common_1.Put('subscription'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "updateSub", null);
SharedController = __decorate([
    common_1.Controller('shared'),
    __metadata("design:paramtypes", [shared_service_1.SharedService,
        users_service_1.UsersService])
], SharedController);
exports.SharedController = SharedController;
//# sourceMappingURL=shared.controller.js.map