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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const base64 = require("base-64");
let EmailService = class EmailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
        this.cc = ['joelimalive1994@gmail.com'];
    }
    async sendWeclcomeMail(data) {
        let options = {
            to: data.email || 'joelimalive1994@gmail.com',
            subject: 'ARI Registration Notification',
            template: 'welcome',
            context: data,
            cc: this.cc
        };
        let result = await this.sendMail(options);
        return result;
    }
    async sendVerifiedMail(data) {
        let options = {
            to: data.email || 'joelimalive1994@gmail.com',
            subject: 'ARI Verification Notification',
            template: 'verification-success',
            context: data,
            cc: this.cc
        };
        let result = await this.sendMail(options);
        return result;
    }
    async sendForgotPasswordMail(data) {
        let options = {
            to: data.email,
            subject: 'NNPS Password Reset Email',
            template: 'forgot-password',
            context: {
                link: data.link + base64.encode(data.email)
            }
        };
        let result = await this.sendMail(options);
        return result;
    }
    async sendAppointmentMail(data) {
        let options = {
            to: data.email || 'joelimalive1994@gmail.com',
            subject: 'ARI Appointment Notification',
            template: 'appointment',
            context: data,
            cc: this.cc
        };
        let result = await this.sendMail(options);
        return result;
    }
    async sendReminderMail(data) {
        let options = {
            to: data.email || 'joelimalive1994@gmail.com',
            subject: 'ARI Reminder Notification',
            template: 'reminder',
            context: data,
            cc: this.cc
        };
        let result = await this.sendMail(options);
        return result;
    }
    async sendPaymentMail(data) {
        let options = {
            to: data.email || 'joelimalive1994@gmail.com',
            subject: 'ARI Payment Notification',
            template: 'payment',
            context: data,
            cc: this.cc
        };
        let result = await this.sendMail(options);
        return result;
    }
    sendMail(options = null) {
        return new Promise((resolve, reject) => {
            this.mailerService.sendMail(options)
                .then(() => { resolve(true); })
                .catch((error) => { console.log(error); resolve(false); });
        });
    }
};
EmailService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map