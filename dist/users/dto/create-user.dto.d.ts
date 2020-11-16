export declare class CreateAddressDto {
    id?: number;
    userId: number;
    name: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    phone: string;
}
export declare class CreateBankDetailsDto {
    userId: number;
    name: string;
    bankName: string;
    accountNumber: string;
    branch: string;
    ifsc: string;
    pan: string;
}
export declare class CreateUserDto {
    id?: number;
    userName: string;
    password?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    picture?: string;
    status: number;
}
export declare class CreateVendorDto {
    user: CreateUserDto;
    bankDetails?: CreateBankDetailsDto;
    contactAddress?: CreateAddressDto;
}
