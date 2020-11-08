import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, ValidateNested } from 'class-validator';
import { IsOptional, IsNumber, IsString } from 'class-validator';
import { AddressDto } from './address.dto';

export class PatientDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsString()
  picture: string;

  @IsString()
  dateOfBirth: string;

  @IsString()
  ethnicity: string;

  @IsString()
  gender: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsNumber()
  subscriptionId: number;

  @IsArray()
  specalists: Array<number>;

  @IsArray()
  symptoms: Array<number>;

  @IsArray()
  providerTypes: Array<number>;

  @IsArray()
  medicalProblems: Array<number>;

  @IsString()
  medications: string;

  @IsString()
  otherMedicalProblems: string;

  @IsString()
  otherSymptoms: string;

  @IsString()
  otherSpecialist: string;

  @IsString()
  vitamins: string;

  @IsString()
  restrictions: string;

  @IsString()
  allergies: string;

  @IsString()
  socialHistory: string;

  @IsString()
  surgeryHistory: string;

  @IsString()
  familyHistory: string;

  @IsString()
  vaccinationHistory: string;

  @IsString()
  travelHistory: string;

  @IsString()
  hospitalizationHistory: string;

  @IsNumber()
  status: number;

}
