import { HttpService } from '@nestjs/common';
import { ConfigService } from '../core/config/config.service';
import { UserFCMToken } from '../users/models/user-fcm-token.model';
import { User } from '../users/models/user.model';
export declare class FcmService {
    private readonly httpService;
    private configService;
    private readonly userModel;
    private readonly userFCMTokenModel;
    constructor(httpService: HttpService, configService: ConfigService, userModel: typeof User, userFCMTokenModel: typeof UserFCMToken);
    sendMessage(data: any): Promise<any>;
}
