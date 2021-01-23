import { Model } from 'sequelize-typescript';
export declare class ProviderRegistration extends Model<ProviderRegistration> {
    title: string;
    providerCredential: 'MD' | 'DO';
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: 'M' | 'F' | 'T';
    yearsInPractice: string;
    boardCertifiedSpecialty: string;
    statesOfLicensure: string;
    howLearnAboutTeladocHealth: string;
    otherTeladocHealth: string;
    currentlyEnrolledIn: string;
    verified: number;
}
