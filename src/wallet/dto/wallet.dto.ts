import { IsString, IsDecimal, IsNumber, IsOptional } from "class-validator";

export class walletEntryDto {
    @IsNumber()
    walletId: number;

    @IsNumber()
    amount: number;

    @IsString()
    type: 'C' | 'D';

    @IsOptional()
    @IsString()
    note: string;
}

export class walletClaimEntryDto {
    @IsNumber()
    walletId: number;

    @IsNumber()
    amount: number;

    @IsOptional()
    @IsString()
    status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
}