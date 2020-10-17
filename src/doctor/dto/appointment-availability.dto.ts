import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsEnum, IsNumber, IsString, ValidateNested } from 'class-validator';


export class AppointmentIntervalDto {
    @IsString()
    start: string;

    @IsString()
    end: string;
}

export class AppointmentSlotDto {
    @IsEnum(['DAY', 'DATE'])
    type: 'DAY' | 'DATE';

    @IsString()
    value: string;

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => AppointmentIntervalDto)
    intervals: Array<AppointmentIntervalDto>
}

export class AppointmentAvailabilityDto {
    @IsNumber()
    providerId: number;

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => AppointmentSlotDto)
    slots: Array<AppointmentSlotDto>;
}
