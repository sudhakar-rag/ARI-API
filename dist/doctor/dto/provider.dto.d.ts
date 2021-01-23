import { AddressDto } from './../../patient/dto/address.dto';
export declare class ProviderDto {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    address: AddressDto;
    picture: string;
    dateOfBirth: string;
    ethnicity: string;
    gender: string;
    medicalSpeciality: number;
    areaOfInterest: string;
    services: Array<number>;
    educations: Array<ProviderEducationDto>;
    hospitals: Array<ProviderHospitalDto>;
    affiliations: Array<string>;
    languages: Array<number>;
    otherLang: string;
    references: Array<ProviderReferenceDto>;
    religiousAffiliaions: string;
    specialBackground: string;
    limitation: string;
    hasDrugAddiction: boolean;
    addiction: string;
    hasCriminalRecord: boolean;
    crime: string;
    hasMalpractice: boolean;
    malpractice: string;
}
export declare class ProviderEducationDto {
    id: number;
    providerId: number;
    school: string;
    degree: string;
    fromYear: string;
    toYear: string;
}
export declare class ProviderHospitalDto {
    id: number;
    providerId: number;
    hospital: string;
    location: string;
    state: string;
    fromYear: string;
    toYear: string;
}
export declare class ProviderReferenceDto {
    id: number;
    providerId: number;
    title: string;
    firstName: string;
    lastName: string;
    degree: string;
    hospital: string;
    email: string;
    phone: string;
}
export declare class ProviderRegistrationDto {
    id: number;
    title: string;
    providerCredential: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    yearsInPractice: string;
    boardCertifiedSpecialty: string;
    howLearnAboutTeladocHealth: string;
    otherTeladocHealth: string;
    currentlyEnrolledIn: string;
}
