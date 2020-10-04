import { IsBoolean, IsDate } from 'class-validator';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class PatientDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsNumber()
  userId: number;

  @IsNumber()
  serviceType: number;

  @IsDate()
  fatherBirthDate: Date;

  @IsDate()
  fatherDeathDate: Date;

  @IsDate()
  motherBirthDate: Date;

  @IsDate()
  motherDeathDate: Date;

  @IsBoolean()
  drugUse: boolean;

  @IsBoolean()
  smoking: boolean;

  @IsNumber()
  smokingPerDay: number;

  @IsBoolean()
  alcohol: boolean;

  @IsNumber()
  alcoholPerDay: number;

  @IsString()
  surgeries: string;

  @IsString()
  vaccination: string;

  @IsString()
  travel: string;

  @IsString()
  hospitalization: string;

  @IsString()
  prescriptionMeds: string;

  @IsString()
  overTheCounterMeds: string;

  @IsString()
  dietRestrictions: string;

  @IsString()
  allergies: string;

  @IsString()
  appointmentPoint: string;
}
