import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreatePaymentDto {

    @IsNumber()
    userId: number;

    @IsString()
    type: 'S' | 'P'

    @IsString()
    paymentType: 'S' | 'A'

    @IsOptional()
    @IsNumber()
    appointmentId?: number;

    @IsOptional()
    @IsNumber()
    subscriptionId?: number;

    @IsNumber()
    amount: number;

    @IsString()
    txnId: string;

    @IsString()
    status: 'APPROVED' | 'PENDING' | 'CANCELLED' | 'REFUNDED'

    @IsOptional()
    @IsNotEmpty()
    stripe?: any;
}