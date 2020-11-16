import { ConfigService } from './core/config/config.service';
export declare class AppService {
    private configService;
    constructor(configService: ConfigService);
    getHello(): string;
}
