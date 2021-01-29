export declare class walletEntryDto {
    walletId: number;
    amount: number;
    type: 'C' | 'D';
    note: string;
}
export declare class walletClaimEntryDto {
    walletId: number;
    amount: number;
    status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
}
