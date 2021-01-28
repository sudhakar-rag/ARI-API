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
exports.PaymentController = void 0;
const payment_service_1 = require("./../services/payment.service");
const common_1 = require("@nestjs/common");
const response_data_1 = require("./../../core/common/response-data");
const swagger_1 = require("@nestjs/swagger");
const payment_dto_1 = require("../dto/payment.dto");
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async getPayments(userId) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.paymentService.getPaymentsById(userId);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async getProviderPayments(providerId) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.paymentService.getProviderPaymentsById(+providerId);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async savePayment(paymentData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.paymentService.savePayment(paymentData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async refundPayment(appointmentId) {
        let data = await this.paymentService.refundPayment(appointmentId);
        return {
            data: data
        };
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getPayments", null);
__decorate([
    common_1.Get('provider/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getProviderPayments", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_dto_1.CreatePaymentDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "savePayment", null);
__decorate([
    common_1.Get('refund/:appointmentId'),
    __param(0, common_1.Param('appointmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "refundPayment", null);
PaymentController = __decorate([
    swagger_1.ApiTags('payment'),
    common_1.Controller('payment'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map