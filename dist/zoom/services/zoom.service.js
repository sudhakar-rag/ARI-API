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
exports.ZoomService = void 0;
const config_service_1 = require("../../core/config/config.service");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const crypto = require("crypto");
let ZoomService = class ZoomService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    createMeeting(data) {
        return new Promise((resolve) => {
            const apiUser = this.configService.get('ZOOM_API_USER');
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
            return this.httpService.post(endpoint, params, { headers: headers }).pipe(operators_1.map((resp) => {
                return resp.data || {};
            }), operators_1.catchError(error => {
                console.log(error);
                return rxjs_1.of({});
            })).subscribe((data) => {
                resolve(data);
            });
        });
    }
    getToken() {
        const jwt = require('jsonwebtoken');
        const payload = {
            iss: this.configService.get('ZOOM_API_KEY'),
            exp: ((new Date()).getTime() + 5000)
        };
        const token = jwt.sign(payload, this.configService.get('ZOOM_API_SECRET'));
        return token;
    }
    getSignature(data) {
        const key = this.configService.get('ZOOM_API_KEY');
        const secret = this.configService.get('ZOOM_API_SECRET');
        const timestamp = new Date().getTime() - 30000;
        const msg = Buffer.from(key + data.meetingNumber + timestamp + data.role).toString('base64');
        const hash = crypto.createHmac('sha256', secret).update(msg).digest('base64');
        const signature = Buffer.from(`${key}.${data.meetingNumber}.${timestamp}.${data.role}.${hash}`).toString('base64');
        return signature;
    }
    getToken1() {
        return new Promise((resolve) => {
            const apiUser = this.configService.get('ZOOM_API_USER');
            const endpoint = 'https://api.zoom.us/v2/users/' + apiUser + '/token';
            console.log(endpoint);
            const auth_token = this.getToken();
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth_token}`
            };
            console.log(auth_token);
            this.httpService.get(endpoint, { headers: headers }).pipe(operators_1.map((resp) => {
                return resp.data || {};
            }), operators_1.catchError(error => {
                console.log(error);
                return rxjs_1.of({});
            })).subscribe((data) => {
                resolve({
                    token: data.token || '',
                    accessToken: auth_token
                });
            });
        });
    }
    getMeetingDetails(mettingId) {
        return new Promise((resolve) => {
            const apiUser = this.configService.get('ZOOM_API_USER');
            const endpoint = 'https://api.zoom.us/v2/meetings/' + mettingId;
            const auth_token = this.getToken();
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth_token}`
            };
            return this.httpService.get(endpoint, { headers: headers }).pipe(operators_1.map((resp) => {
                return resp.data || {};
            }), operators_1.catchError(error => {
                console.log(error);
                return rxjs_1.of({});
            })).subscribe((data) => {
                resolve(data);
            });
        });
    }
};
ZoomService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService,
        config_service_1.ConfigService])
], ZoomService);
exports.ZoomService = ZoomService;
//# sourceMappingURL=zoom.service.js.map