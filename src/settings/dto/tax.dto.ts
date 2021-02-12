import { IsOptional, IsNumber, IsBoolean } from "class-validator";

export class SaveTaxDto {
    @IsOptional()
    @IsNumber()
    stateId?: number;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsNumber()
    type?: 'F' | 'P';

    @IsBoolean()
    status?: boolean;
}