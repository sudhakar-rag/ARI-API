import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailService {
    private readonly mailerService;
    cc: Array<string>;
    constructor(mailerService: MailerService);
    sendWeclcomeMail(data: any): Promise<unknown>;
    sendVerifiedMail(data: any): Promise<unknown>;
    sendForgotPasswordMail(data: any): Promise<unknown>;
    sendAppointmentMail(data: any): Promise<unknown>;
    sendReminderMail(data: any): Promise<unknown>;
    sendPaymentMail(data: any): Promise<unknown>;
    sendMail(options?: any): Promise<unknown>;
}
