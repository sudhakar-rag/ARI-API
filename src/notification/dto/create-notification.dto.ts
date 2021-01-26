import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsBoolean, IsString } from 'class-validator';


export class CreateNotificationDto {

    @ApiProperty({ type: Number })
    @IsOptional()
    @IsNumber()
    notificationId?: number;

    @ApiProperty({ type: Number })
    @IsNumber()
    appointmentId: number;

    @ApiProperty({ type: Number })
    @IsNumber()
    userId: number;

    @ApiProperty({ type: String })
    @IsString()
    message: string;

    @ApiProperty({ type: String })
    @IsOptional()
    @IsString()
    text?: string;

    @ApiProperty({ type: Boolean })
    @IsBoolean()
    status: boolean;

}
