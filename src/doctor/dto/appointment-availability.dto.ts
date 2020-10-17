import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsEnum, IsNumber, IsString, ValidateNested } from 'class-validator';


export enum AppointmentSlotType {
    DAY = 'DAY',
    DATE = 'DATE'
}

export class AppointmentIntervalDto {
    @ApiProperty({ type: String, default: '11:15' })
    @IsString()
    start: string;

    @ApiProperty({ type: String, default: '13:45' })
    @IsString()
    end: string;
}

export class AppointmentSlotDto {
    @ApiProperty({ enum: AppointmentSlotType, enumName: 'slotType' })
    @IsEnum(['DAY', 'DATE'])
    type: 'DAY' | 'DATE';

    @ApiProperty({ type: String, default: 'tuesday' })
    @IsString()
    value: string;

    @ApiProperty({ type: [AppointmentIntervalDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => AppointmentIntervalDto)
    intervals: Array<AppointmentIntervalDto>
}

export class AppointmentAvailabilityDto {
    @ApiProperty({ type: Number, default: 11 })
    @IsNumber()
    providerId: number;

    @ApiProperty({ type: [AppointmentSlotDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => AppointmentSlotDto)
    slots: Array<AppointmentSlotDto>;
}
