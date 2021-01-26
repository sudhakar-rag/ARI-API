/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from '../core/config/config.service';
import { UserFCMToken } from '../users/models/user-fcm-token.model';
import { User } from '../users/models/user.model';

@Injectable()
export class FcmService {

    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService,
        @InjectModel(User)
        private readonly userModel: typeof User,
        @InjectModel(UserFCMToken)
        private readonly userFCMTokenModel: typeof UserFCMToken,
    ) {

    }

    /**
     * sendMessage
     */
    public sendMessage(data: any): Promise<any> {
        return new Promise(async (resolve) => {
            const key = this.configService.get('FCM_SERVER_KEY')
            const endpoint = 'https://fcm.googleapis.com/fcm/send';

            const result = await this.userFCMTokenModel.findAll({
                where: {
                    userId: data.userId
                }
            });

            const tokens = [];
            for (const row of result) {
                tokens.push(row.token);
            }

            const params = {
                notification: {
                    title: data.title,
                    body: data.body
                },
                registration_ids: tokens,
                data: data
            };


            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `key=${key}`
            };

            return this.httpService.post(endpoint, params, { headers: headers }).pipe(
                map((resp) => {
                    return resp.data || {};
                }),
                catchError(error => {
                    console.log(error);

                    return of({});
                })
            ).subscribe((data) => {
                resolve(data);
            })
        });

    }
}
