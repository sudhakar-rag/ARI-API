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
exports.AppointmentController = void 0;
const create_attachment_dto_1 = require("./../dto/create-attachment.dto");
const response_data_1 = require("../../core/common/response-data");
const create_appointment_dto_1 = require("../dto/create-appointment.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const appointment_service_1 = require("../services/appointment.service");
const list_query_params_dto_1 = require("../../core/common/list-query-params.dto");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const update_appointment_dto_1 = require("../dto/update-appointment.dto");
let AppointmentController = class AppointmentController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    async getTodaysAppointmentList(date) {
        const output = new response_data_1.ResponseData();
        try {
            const appData = await this.appointmentService.getAppointmentsListByDate(date);
            if (!appData) {
                throw 'Invalid Input.';
            }
            output.data = appData;
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getAppointmentDetails(appointmentId) {
        const output = new response_data_1.ResponseData();
        try {
            const appData = await this.appointmentService.getAppointmentDeatils(appointmentId);
            if (!appData) {
                throw 'Invalid Input.';
            }
            output.data = appData;
            output.status = true;
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
            output.data = await this.appointmentService.getAppointments(queryParams);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getAppointmentsByDate(data) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.appointmentService.getAppointmentByDate(data);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async createAppointment(appointmentData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.appointmentService.saveAppointment(appointmentData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async updateStatus(appointmentData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.appointmentService.updateAppointmentStatus(appointmentData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async addAttachment(attachmentData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.appointmentService.addAttachments(attachmentData);
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getAttachments(queryParams) {
        const output = new response_data_1.ResponseData();
        try {
            const appData = await this.appointmentService.getAttachments(queryParams);
            if (!appData) {
                throw 'Invalid Input.';
            }
            output.data = appData;
            output.status = true;
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async deleteFile(fileId) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.appointmentService.deleteFile(fileId);
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
    swagger_1.ApiOperation({ summary: "Get appointment list by date" }),
    common_1.Get('byDate/:date'),
    __param(0, common_1.Param('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getTodaysAppointmentList", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get appointment details' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getAppointmentDetails", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'returns appointments list' }),
    swagger_1.ApiBody({ type: list_query_params_dto_1.ListQueryParamsDto }),
    swagger_1.ApiCreatedResponse({
        description: 'provider list.',
        type: response_data_1.ResponseData,
    }),
    common_1.Post('list'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_query_params_dto_1.ListQueryParamsDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getAppointments", null);
__decorate([
    common_1.Post('date'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getAppointmentsByDate", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'create appointment' }),
    swagger_1.ApiBody({ type: create_appointment_dto_1.CreateAppointmentDto }),
    swagger_1.ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: create_appointment_dto_1.CreateAppointmentDto,
    }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_appointment_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "createAppointment", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'update appointment' }),
    swagger_1.ApiBody({ type: update_appointment_dto_1.UpdateAppointmentDto }),
    swagger_1.ApiCreatedResponse({
        description: 'The record has been successfully updated.',
        type: response_data_1.ResponseData,
    }),
    common_1.Post('update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_appointment_dto_1.UpdateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "updateStatus", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'add attachment' }),
    swagger_1.ApiBody({ type: create_attachment_dto_1.CreateAttachmentDto }),
    swagger_1.ApiCreatedResponse({
        description: 'The file has been successfully uploaded.',
        type: response_data_1.ResponseData,
    }),
    common_1.Post('attachment'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attachment_dto_1.CreateAttachmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "addAttachment", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get Attachments of user' }),
    common_1.Post('attachments/list'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_query_params_dto_1.ListQueryParamsDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getAttachments", null);
__decorate([
    common_1.Delete('delete-file/:fileId'),
    __param(0, common_1.Param('fileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "deleteFile", null);
AppointmentController = __decorate([
    swagger_1.ApiTags('appointment'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Controller('appointment'),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService])
], AppointmentController);
exports.AppointmentController = AppointmentController;
//# sourceMappingURL=appointment.controller.js.map