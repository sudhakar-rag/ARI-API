import { CreateSignatureDto, CreateZoomTokenDto } from '../dto/create-token.dto';
import { ZoomService } from '../services/zoom.service';
export declare class ZoomController {
    private zoomService;
    constructor(zoomService: ZoomService);
    getMeetingData(meetingId: string): any;
    createToken(tokenRequest: CreateZoomTokenDto): any;
    getSignature(signatureData: CreateSignatureDto): any;
    getToken(signatureData: any): Promise<any>;
}
