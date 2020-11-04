import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber , IsBoolean } from 'class-validator';


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

    @ApiProperty({ type: Boolean })
    @IsBoolean()
    status: boolean;

}
