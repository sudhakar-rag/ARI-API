import { IsNumber, IsString } from "class-validator";

export class CreateZoomTokenDto {
    @IsString()
    topic: string;

    @IsString()
    startTime: string;

    @IsNumber()
    duration: string;
}

export class CreateSignatureDto {
    @IsNumber()
    meetingNumber: string;

    @IsNumber()
    role: string;
}