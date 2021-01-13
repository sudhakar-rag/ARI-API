import { ConfigService } from '@app/src/core/config/config.service';
import { HttpService } from '@nestjs/common';
import { CreateSignatureDto, CreateZoomTokenDto } from '../dto/create-token.dto';
export declare class ZoomService {
    private readonly httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    createMeeting(data: CreateZoomTokenDto): Promise<any>;
    getToken(): string;
    getSignature(data: CreateSignatureDto): string;
    getToken1(): Promise<any>;
}
