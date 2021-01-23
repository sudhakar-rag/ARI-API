import { Model } from 'sequelize-typescript';
export declare class ProviderRegistration extends Model<ProviderRegistration> {
    title: string;
    doctorcredential: 'MD' | 'DO';
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    yearsInPractice: string;
    boardCertifiedSpecialty: string;
    statesOfLicensure: string;
    howLearnAboutTeladocHealth: string;
    otherTeladocHealth: string;
    currentlyEnrolledIn: string;
}
