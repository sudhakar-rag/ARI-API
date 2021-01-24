import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSignatureDto, CreateZoomTokenDto } from '../dto/create-token.dto';
import { ZoomService } from '../services/zoom.service';

@Controller('zoom')
export class ZoomController {

    constructor(private zoomService: ZoomService) {

    }


    @Get('meeting/:meetingId')
    getMeetingData(@Param('meetingId') meetingId: string): any {
        return this.zoomService.getMeetingDetails(meetingId);
    }

    @Post('meeting')
    createToken(@Body() tokenRequest: CreateZoomTokenDto): any {
        return this.zoomService.createMeeting(tokenRequest);
    }

    @Post('signature')
    getSignature(@Body() signatureData: CreateSignatureDto): any {
        return {
            signature: this.zoomService.getSignature(signatureData)
        };
    }

    @Post('token')
    async getToken(@Body() signatureData: any): Promise<any> {
        return await this.zoomService.getToken1();
    }
}
