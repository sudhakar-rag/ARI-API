import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
@Module({
    imports: [
        MailerModule.forRootAsync({
            useFactory: () => ({
                transport: {
                    service: 'gmail',
                    host: "smtp.gmail.com",
                    port: 587,
                    ignoreTLS: true,
                    secure: false,
                    // secure: true, // true for 465, false for other ports
                    auth: {
                        user: 'ramakrishnan001@gmail.com', // generated ethereal user
                        pass: 'Prajna1910$' // generated ethereal password
                    }
                },
                // transport: {
                //     sendmail: true,
                //     newline: 'unix',
                //     path: '/usr/sbin/sendmail'
                // },
                defaults: {
                    from: '"ARI" <admin@ari.com>',
                },
                template: {
                    dir: __dirname + '/templates',
                    adapter: new HandlebarsAdapter(), // or new PugAdapter()
                    options: {
                        strict: true,
                    },
                },
            }),
        }),
    ],
    providers: [EmailService],
    exports: [EmailService]
})
export class EmailModule { }

