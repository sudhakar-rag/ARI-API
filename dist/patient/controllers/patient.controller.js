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
exports.PatientsController = void 0;
const email_service_1 = require("./../../email/email.service");
const create_provider_service_1 = require("./../../doctor/services/create-provider.service");
const patient_basic_dto_1 = require("./../dto/patient-basic.dto");
const patient_service_1 = require("./../services/patient.service");
const common_1 = require("@nestjs/common");
const response_data_1 = require("../../core/common/response-data");
const patient_dto_1 = require("../dto/patient.dto");
const create_patient_service_1 = require("../services/create-patient.service");
const swagger_1 = require("@nestjs/swagger");
const list_query_params_dto_1 = require("../../core/common/list-query-params.dto");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const users_service_1 = require("../../users/services/users.service");
let PatientsController = class PatientsController {
    constructor(providerService, patientsService, createPatientService, emailService, usersService) {
        this.providerService = providerService;
        this.patientsService = patientsService;
        this.createPatientService = createPatientService;
        this.emailService = emailService;
        this.usersService = usersService;
    }
    async getPatients(queryParams) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.patientsService.getPatients(queryParams);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getAvailabilityData(providerId) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = providerId;
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async testMail(data) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.emailService.sendReminderMail(data);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getPatientInfo(userId) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.patientsService.getPatientById(userId);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getProvidersCount() {
        const result = await this.patientsService.getPatientsCount();
        return {
            data: result
        };
    }
    async createPatient(patientInfo) {
        const output = new response_data_1.ResponseData();
        try {
            const user = await this.usersService.findOne({ email: patientInfo.email });
            if (user) {
                throw "Patient already exists.";
            }
            output.data = await this.createPatientService.createPatient(patientInfo);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateBasicInfo(basicInfo) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createPatientService.updateBasicInfo(basicInfo);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateSubscription(subData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createPatientService.updateSubscription(subData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateHistory(historyData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createPatientService.updateHistory(historyData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateHealth(healthData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createPatientService.updateHealth(healthData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateSymptoms(symptData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createPatientService.updateSymptoms(symptData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateMedProblems(medProbData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createPatientService.updateMedProblems(medProbData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async saveRatings(ratingData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.providerService.saveRating(ratingData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateProvider(proData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.createPatientService.updateProvider(proData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async test(proData) {
        const welcomeData = {
            email: proData.email,
            name: 'Ram K',
            userName: 'ramki',
            password: '123456'
        };
        const t = await this.emailService.sendWeclcomeMail(welcomeData);
        console.log(t);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "getPatients", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'get availability data by provider' }),
    common_1.Get(':providerId/availability'),
    __param(0, common_1.Param('providerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "getAvailabilityData", null);
__decorate([
    common_1.Post('test'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "testMail", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "getPatientInfo", null);
__decorate([
    common_1.Get('patients/count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "getProvidersCount", null);
__decorate([
    common_1.Post('createPatient'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patient_dto_1.PatientDto]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "createPatient", null);
__decorate([
    common_1.Put('basicInfo'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patient_basic_dto_1.PatientBasicDto]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "updateBasicInfo", null);
__decorate([
    common_1.Put('subscription'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "updateSubscription", null);
__decorate([
    common_1.Put('history'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "updateHistory", null);
__decorate([
    common_1.Put('health'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "updateHealth", null);
__decorate([
    common_1.Put('symptoms'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "updateSymptoms", null);
__decorate([
    common_1.Put('medProblems'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "updateMedProblems", null);
__decorate([
    common_1.Post('rating'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "saveRatings", null);
__decorate([
    common_1.Put('provider'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "updateProvider", null);
__decorate([
    common_1.Put('testMail'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "test", null);
PatientsController = __decorate([
    swagger_1.ApiTags('patient'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('patient'),
    __metadata("design:paramtypes", [create_provider_service_1.CreateProviderService,
        patient_service_1.PatientService,
        create_patient_service_1.CreatePatientService,
        email_service_1.EmailService,
        users_service_1.UsersService])
], PatientsController);
exports.PatientsController = PatientsController;
//# sourceMappingURL=patient.controller.js.map