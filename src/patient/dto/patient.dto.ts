import { IsArray, IsBoolean, IsDate } from 'class-validator';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class PatientDto {
  @IsOptional()
  @IsNumber()
  id: number;


  @IsNumber()
  userId: number;

  @IsString()
  gender: string;

  @IsString()
  dateOfBirth: string;

  @IsString()
  ethnicity: string;

  @IsString()
  primaiyProvider: string;

  @IsOptional()
  @IsString()
  specialist: string;

  @IsString()
  socialHistory: string;

  @IsOptional()
  @IsString()
  surgeryHistory: string;

  @IsOptional()
  @IsString()
  fatherHisory: string;

  @IsOptional()
  @IsString()
  motherHisory: string;

  @IsOptional()
  @IsString()
  vaccinationHisory: string;

  @IsOptional()
  @IsString()
  travelHistory: string;

  @IsOptional()
  @IsString()
  hospitalizationHistory: string;

  @IsOptional()
  @IsArray()
  medicalProblems: Array<number>;

  @IsOptional()
  @IsArray()
  currentSymptoms: Array<number>;
}
