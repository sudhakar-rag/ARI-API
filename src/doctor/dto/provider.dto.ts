import { IsArray } from 'class-validator';
import { IsBoolean, IsDate } from 'class-validator';
import { IsOptional, IsNumber, IsString } from 'class-validator';

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

  @IsString()
  address: string;

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
  education: Array<ProviderEducationDto>;

  @IsArray()
  hospitals: Array<ProviderHospitalDto>;

  @IsArray()
  affiliations: Array<string>;

  @IsArray()
  languages: Array<string>;

  @IsString()
  religiousAffiliaions: string;

  @IsString()
  specialBackground: string;

  @IsString()
  limitation: string;

  @IsString()
  addiction: string;

  @IsString()
  crime: string;

  @IsString()
  malpractice: string;

}

export class ProviderEducationDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsNumber()
  userId: number;

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

  @IsNumber()
  userId: number;

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
