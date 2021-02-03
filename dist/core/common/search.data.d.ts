export declare class PaginationInterface {
    readonly offset: number;
    readonly pageSize: number;
}
export declare class SearchDto {
    queryString?: string;
    pageNumber?: number;
    pageSize?: number;
    filters?: any;
    sortField: string;
    sortOrder: string;
}
