/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as base64 from "base-64";
@Injectable()
export class EmailService {
    public cc: Array<string> = [];
    constructor(
        private readonly mailerService: MailerService
    ) {

    }

    async sendWeclcomeMail(data: any) {

        // let options: ISendMailOptions = {
        const options = {
            to: data.email || 'joelimalive1994@gmail.com',
            subject: 'ARI Registration Notification',
            template: 'welcome',
            context: data,
            cc: this.cc
        };

        const result = await this.sendMail(options);
        return result;

    }


    async sendVerifiedMail(data: any) {

        // let options: ISendMailOptions = {
        const options = {
            to: data.email || 'joelimalive1994@gmail.com',
            subject: 'ARI Verification Notification',
            template: 'verification-success',
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
            subject: 'ARI Password Reset Email',
            template: 'forgot-password',
            context: {
                // link: data.link + base64.encode(data.email)
                name: data.name || '',
                link: data.link + data.id
            }
        };

        let result = await this.sendMail(options);
        return result;
    }

    async sendAppointmentMail(data: any) {

        // let options: ISendMailOptions = {
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

    async sendReminderMail(data: any) {

        // let options: ISendMailOptions = {
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

    async sendPaymentMail(data: any) {

        // let options: ISendMailOptions = {
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


    // async sendMail(options: ISendMailOptions = null) {
    sendMail(options = null) {
        return new Promise((resolve, reject) => {
            this.mailerService.sendMail(options)
                .then(() => { resolve(true); })
                .catch((error) => { console.log(error); resolve(false); });
        });
    }
}


