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
exports.PaymentService = void 0;
const email_service_1 = require("./../../email/email.service");
const users_service_1 = require("./../../users/services/users.service");
const constants_1 = require("./../../core/config/constants");
const payment_model_1 = require("./../../shared/models/payment.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
let PaymentService = class PaymentService {
    constructor(paymentModel, usersService, emailService, sequelize) {
        this.paymentModel = paymentModel;
        this.usersService = usersService;
        this.emailService = emailService;
        this.sequelize = sequelize;
    }
    async getPaymentsById(userId) {
        return await this.paymentModel.findAll({
            where: { userId: userId }
        });
    }
    async savePayment(paymentData) {
        const stripe = new stripe_1.default(constants_1.STRIPE_SECRET_KEY, {
            apiVersion: '2020-08-27',
        });
        const stripeResult = stripe.charges.create({
            amount: paymentData.amount,
            currency: paymentData.currency,
            source: paymentData.source
        });
        if (stripeResult) {
            await this.paymentModel.create({
                userId: paymentData.userId,
                type: paymentData.type,
                amount: paymentData.amount,
                txnId: (await stripeResult).id,
                status: (await stripeResult).status,
            });
            const userDetails = await this.usersService.getLoggedinUserData();
            const mailData = {
                name: (await userDetails).firstName,
                email: (await userDetails).email,
                amount: paymentData.amount,
            };
            await this.emailService.sendPaymentMail(mailData);
            return stripeResult;
        }
        else {
            return paymentData;
        }
    }
};
PaymentService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(payment_model_1.Payment)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        email_service_1.EmailService,
        sequelize_typescript_1.Sequelize])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map