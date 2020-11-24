import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as base64 from "base-64";
@Injectable()
export class EmailService {
    public cc: Array<string> = ['ramakrishnan001@gmail.com'];
    constructor(
        private readonly mailerService: MailerService
    ) {

    }

    async sendLowStockMail(data: any) {

        // let options: ISendMailOptions = {
        let options = {
            to: data.email || 'neelnaturals@gmail.com',
            subject: 'Low Stock Notification',
            template: 'low-stock-notification',
            context: data,
            cc: this.cc
        };

        let result = await this.sendMail(options);
        return result;

    }

    async sendForgotPasswordMail(data: any) {

        // let options: ISendMailOptions = {
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

    // async sendMail(options: ISendMailOptions = null) {
    sendMail(options = null) {
        return new Promise((resolve, reject) => {
            this.mailerService.sendMail(options)
                .then(() => { resolve(true); })
                .catch((error) => { console.log(error); resolve(false); });
        });
    }
}


