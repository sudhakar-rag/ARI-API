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
const appointment_model_1 = require("../../shared/models/appointment.model");
const subscription_model_1 = require("../../shared/models/subscription.model");
const user_model_1 = require("../../users/models/user.model");
let PaymentService = class PaymentService {
    constructor(paymentModel, usersService, emailService, sequelize) {
        this.paymentModel = paymentModel;
        this.usersService = usersService;
        this.emailService = emailService;
        this.sequelize = sequelize;
    }
    async getPaymentsById(userId) {
        return await this.paymentModel.findAll({
            where: { userId: userId },
            include: [
                {
                    model: appointment_model_1.Appointment,
                    required: false
                },
                {
                    model: subscription_model_1.Subscription,
                    required: false
                }
            ]
        });
    }
    async getProviderPaymentsById(providerId) {
        return await this.paymentModel.findAll({
            where: { paymentType: 'A' },
            include: [
                {
                    model: appointment_model_1.Appointment,
                    where: { providerId: providerId },
                    required: true
                },
                {
                    model: user_model_1.User
                }
            ]
        });
    }
    async doStripePayment(data) {
        const stripe = new stripe_1.default(constants_1.STRIPE_SECRET_KEY, {
            apiVersion: '2020-08-27',
        });
        const stripeResult = await stripe.charges.create({
            amount: data.amount,
            currency: 'USD',
            source: data.token
        });
        return stripeResult;
    }
    async savePayment(paymentData) {
        const txnData = { id: '', status: 'PENDING' };
        if (paymentData.type == 'S') {
            const sp = await this.doStripePayment({ amount: paymentData.amount, token: paymentData.stripe.token });
            txnData.id = sp.id;
            txnData.status = sp.status == 'succeeded' ? 'APPROVED' : 'PENDING';
        }
        const payment = await this.paymentModel.create({
            userId: paymentData.userId,
            type: paymentData.type,
            paymentType: paymentData.paymentType,
            amount: paymentData.amount,
            txnId: txnData.id,
            status: txnData.status,
        });
        return payment;
    }
    async chargeStripe(token) {
        const stripe = new stripe_1.default(constants_1.STRIPE_SECRET_KEY, {
            apiVersion: '2020-08-27',
        });
        const charge = await stripe.charges.create({
            amount: 999,
            currency: 'usd',
            description: 'Example charge',
            source: token,
        });
        return charge;
    }
    async refundPayment(appointmentId) {
        let transaction = await this.sequelize.transaction();
        return await this.paymentModel.update({ status: 'REFUNDED' }, { where: { appointmentId: appointmentId }, transaction });
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