import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export enum AppointmentType {
    I = 'I',
    G = 'G'
}

export enum AppointmentStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    CANCELLED = 'CANCELLED',
    COMPLETED = 'COMPLETED'
}

export class CreateAppointmentDto {
    @ApiProperty({ type: Number, default: 11 })
    @IsNumber()
    providerId: number;

    @ApiProperty({ type: Number, default: 1 })
    @IsNumber()
    patientId: number;

    @ApiProperty({ type: Date, default: 5 })
    @IsString()
    date: string;

    @ApiProperty({ type: Number, default: 5 })
    @IsNumber()
    slotId: string;

    @ApiProperty({ enum: AppointmentType, enumName: 'appointmentType' })
    @IsString()
    type: string;

    @ApiProperty({ type: String })
    @IsString()
    meetingId: string;

    @ApiProperty({ type: String })
    @IsString()
    joinUrl: string;

    @ApiProperty({ type: String })
    @IsString()
    date: string;

    @ApiProperty({ type: String })
    @IsString()
    startUrl: string;

    @ApiProperty({ enum: AppointmentStatus, enumName: 'appointmentStatus' })
    @IsOptional()
    @IsString()
    status: string;

    @ApiProperty({ type: String, default: 'Fever' })
    @IsString()
    appointmentType: string;

    @ApiProperty({ type: String, default: 'subject text' })
    @IsString()
    subject: string;

    @ApiProperty({ type: String, default: 'message text' })
    @IsString()
    message: string;

    @ApiProperty({ type: String, default: 'assets/image/user.png' })
    @IsString()
    files: string;
}
