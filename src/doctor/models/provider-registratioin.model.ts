import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class ProviderRegistration extends Model<ProviderRegistration> {

    @Column
    title: string;

    @Column(DataType.ENUM('MD', 'DO'))
    providerCredential: 'MD' | 'DO'

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    email: string;

    @Column
    phone: string;

    @Column
    yearsInPractice: string;

    @Column
    boardCertifiedSpecialty: string;

    @Column
    statesOfLicensure: string;

    @Column
    howLearnAboutTeladocHealth: string;

    @Column
    otherTeladocHealth: string;

    @Column
    currentlyEnrolledIn: string;

    @Column
    verified: number;
}
