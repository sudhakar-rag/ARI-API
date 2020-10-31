import { ConfigService } from '@app/src/core/config/config.service';
import { HttpService, Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { CreateSignatureDto, CreateZoomTokenDto } from '../dto/create-token.dto';
import * as crypto from 'crypto';

@Injectable()
export class ZoomService {
    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService
    ) {

    }

    /**
     * createMeeting
     */
    public createMeeting(data: CreateZoomTokenDto): Observable<any> {
        const apiUser = this.configService.get('ZOOM_API_USER')
        const endpoint = 'https://api.zoom.us/v2/users/' + apiUser + '/meetings';
        const params = {
            "topic": data.topic,
            "type": 2,
            "start_time": data.startTime,
            "duration": data.duration,
            "timezone": "America/New_York",
            "password": "1234",
            "agenda": "ARI",
            "tracking_fields": [
                {
                    "field": "string",
                    "value": "string"
                }
            ],
            "settings": {
                "host_video": true,
                "participant_video": true,
                "cn_meeting": false,
                "in_meeting": false,
                "join_before_host": false,
                "mute_upon_entry": true,
                "watermark": false,
                "use_pmi": false,
                "approval_type": 0,
                "registration_type": 1,
                "audio": "voip",
                "enforce_login": false,
                "enforce_login_domains": "",
                "alternative_hosts": "",
                "registrants_email_notification": false
            }
        };

        const auth_token = this.getToken();
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth_token}`
        };

        return this.httpService.post(endpoint, params, { headers: headers }).pipe(
            map((resp) => {
                return resp.data || {};
            }),
            catchError(error => {
                console.log(error);

                return of({});
            })
        );
    }
    /**
     * getToken
     */
    public getToken(): string {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const jwt = require('jsonwebtoken');
        const payload = {
            iss: this.configService.get('ZOOM_API_KEY'),
            exp: ((new Date()).getTime() + 5000)
        };
        const token = jwt.sign(payload, this.configService.get('ZOOM_API_SECRET'));

        return token
    }

    /**
     * getSignature
     */
    public getSignature(data: CreateSignatureDto): string {
        const key = this.configService.get('ZOOM_API_KEY');
        const secret = this.configService.get('ZOOM_API_SECRET');

        const timestamp = new Date().getTime() - 30000
        const msg = Buffer.from(key + data.meetingNumber + timestamp + data.role).toString('base64')
        const hash = crypto.createHmac('sha256', secret).update(msg).digest('base64')
        const signature = Buffer.from(`${key}.${data.meetingNumber}.${timestamp}.${data.role}.${hash}`).toString('base64')
        return signature;
    }

}