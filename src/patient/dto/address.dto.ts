import { IsOptional, IsNumber, IsString } from 'class-validator';

export class AddressDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    phone: string;

    @IsString()
    address1: string;

    @IsString()
    address2: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsNumber()
    country: number;

    @IsString()
    zip: string;
}
