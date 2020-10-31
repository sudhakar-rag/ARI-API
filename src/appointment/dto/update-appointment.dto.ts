import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export enum AppointmentStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    CANCELLED = 'CANCELLED',
    COMPLETED = 'COMPLETED'
}

export class UpdateAppointmentDto {
    @ApiProperty({ type: Number, default: 11 })
    @IsNumber()
    appointmentId: number;

    @ApiProperty({ enum: AppointmentStatus, enumName: 'appointmentStatus' })
    @IsOptional()
    @IsString()
    status: string;
}
