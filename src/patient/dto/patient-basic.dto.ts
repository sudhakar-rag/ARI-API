import { IsOptional, IsNumber, IsString } from 'class-validator';

export class PatientBasicDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsNumber()
    userId: number; 

    @IsOptional()
    @IsNumber()
    addressId: number;

    @IsOptional()
    @IsNumber()
    patientId: number;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    ethnicity: string;

    @IsString()
    dateOfBirth: string;

    @IsString()
    gender: string;

    @IsString()
    address1: string;

    @IsString()
    address2: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsString()
    country: string;

    @IsString()
    zip: string;

}
