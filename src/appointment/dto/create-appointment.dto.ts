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

    @ApiProperty({ type: Number, default: 1 })
    @IsOptional()
    @IsNumber()
    appointmentId?: number;

    @ApiProperty({ type: Number, default: 1 })
    @IsOptional()
    @IsNumber()
    userId: number;

    @ApiProperty({ type: String })
    @IsString()
    date: string;

    @ApiProperty({ type: String, default: '' })
    @IsString()
    start: string;


    @ApiProperty({ type: String, default: '' })
    @IsString()
    end: string;

    @ApiProperty({ enum: AppointmentType, enumName: 'appointmentType' })
    @IsString()
    type: string;

    @ApiProperty({ type: String })
    @IsOptional()
    @IsString()
    meetingId: string;

    @ApiProperty({ type: String })
    @IsOptional()
    @IsString()
    joinUrl: string;


    @ApiProperty({ type: String })
    @IsOptional()
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

    @ApiProperty({ type: String })
    @IsOptional()
    @IsString()
    fileType: string;

    @ApiProperty({ type: String })
    @IsOptional()
    @IsString()
    fileName: string;

    @ApiProperty({ type: Number })
    @IsOptional()
    @IsNumber()
    uploadedBy: number;

    @ApiProperty({ type: String, default: 'assets/image/user.png' })
    @IsString()
    files: string;

    @ApiProperty({ type: Number })
    @IsOptional()
    @IsNumber()
    paymentId: number;
}
