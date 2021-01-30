import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class PaginationInterface {
    @IsNotEmpty()
    readonly offset: number;
    @IsNotEmpty()
    readonly pageSize: number;
}

export class SearchDto {
    @IsOptional()
    @IsString()
    queryString?: string;

    @IsOptional()
    @IsNumber()
    pageNumber?: number;

    @IsOptional()
    @IsNumber()
    pageSize?: number;

    filters?: any

    @IsOptional()
    @IsString()
    sortField: string;

    @IsOptional()
    @IsString()
    sortOrder: string;
}