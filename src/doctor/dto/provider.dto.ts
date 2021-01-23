import { AddressDto } from './../../patient/dto/address.dto';
import { IsArray, IsBoolean, ValidateNested } from 'class-validator';
import { IsOptional, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ProviderDto {
  @IsOptional()
  @IsNumber()
  id?: number;

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

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsString()
  picture: string;

  @IsString()
  dateOfBirth: string;

  @IsString()
  ethnicity: string;

  @IsString()
  gender: string;

  @IsString()
  medicalSpeciality: number;

  @IsString()
  areaOfInterest: string;

  @IsArray()
  services: Array<number>;

  @IsArray()
  educations: Array<ProviderEducationDto>;

  @IsArray()
  hospitals: Array<ProviderHospitalDto>;

  @IsArray()
  affiliations: Array<string>;

  @IsArray()
  languages: Array<number>;

  @IsOptional()
  @IsString()
  otherLang: string;

  @IsArray()
  references: Array<ProviderReferenceDto>;

  @IsString()
  religiousAffiliaions: string;

  @IsString()
  specialBackground: string;

  @IsString()
  limitation: string;

  @IsBoolean()
  hasDrugAddiction: boolean;

  @IsOptional()
  @IsString()
  addiction: string;

  @IsBoolean()
  hasCriminalRecord: boolean;

  @IsOptional()
  @IsString()
  crime: string;

  @IsBoolean()
  hasMalpractice: boolean;

  @IsOptional()
  @IsString()
  malpractice: string;

}

export class ProviderEducationDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  providerId: number;

  @IsString()
  school: string;

  @IsString()
  degree: string;

  @IsString()
  fromYear: string;

  @IsString()
  toYear: string;
}

export class ProviderHospitalDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  providerId: number;

  @IsString()
  hospital: string;

  @IsString()
  location: string;

  @IsString()
  state: string;

  @IsString()
  fromYear: string;

  @IsString()
  toYear: string;
}

export class ProviderReferenceDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  providerId: number;

  @IsString()
  title: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  degree: string;

  @IsString()
  hospital: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;
}



export class ProviderRegistrationDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  providerCredential: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  yearsInPractice: string;

  @IsString()
  boardCertifiedSpecialty: string;

  @IsString()
  statesOfLicensure: string;

  @IsOptional()
  @IsString()
  howLearnAboutTeladocHealth: string;

  @IsOptional()
  @IsString()
  otherTeladocHealth: string;

  @IsString()
  currentlyEnrolledIn: string;

}


