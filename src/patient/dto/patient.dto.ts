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
  MedicalProblems: Array<number>;

  @IsBoolean()
  status: boolean;

}
