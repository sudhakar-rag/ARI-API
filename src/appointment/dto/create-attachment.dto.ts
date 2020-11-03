import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';


export class CreateAttachmentDto {
    @ApiProperty({ type: Number })
    @IsOptional()
    @IsNumber()
    appointmentId: number;

    @ApiProperty({ type: String })
    @IsString()
    type: string;

    @ApiProperty({ type: String })
    @IsString()
    fileName: string;

    @ApiProperty({ type: String })
    @IsString()
    fileUrl: string;

    @ApiProperty({ type: Number })
    @IsNumber()
    uploadedBy: number;

}
