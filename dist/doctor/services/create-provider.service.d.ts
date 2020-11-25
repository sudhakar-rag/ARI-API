import { EmailService } from './../../email/email.service';
import { RatingHistory } from './../models/rating-history';
import { User } from './../../users/models/user.model';
import { ProviderServices } from './../models/provider-services.model';
import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize';
import { UserCreateService } from '@app/src/users/services/user-create.service';
import { Provider } from '../models/provider.model';
import { ProviderDto, ProviderEducationDto, ProviderHospitalDto, ProviderReferenceDto } from '../dto/provider.dto';
import { AddressDto } from '@app/src/patient/dto/address.dto';
import { Address } from '@app/src/users/models/address.model';
import { ProviderAddress } from '../models/provider-address.model';
import { ProviderLanguage } from '../models/provider-language.model';
import { ProviderAffilation } from '../models/provider-affilation.model';
import { ProviderEducation } from '../models/provider-education.model';
import { ProviderHospital } from '../models/provider-hospital.model';
import { ProviderReference } from '../models/provider-reference.model';
import { ProviderHistory } from '../models/provider-history.model';
import { ProviderSpecality } from '../models/provider-speciality.model';
export declare class CreateProviderService {
    private readonly userModel;
    private readonly providerModel;
    private readonly providerHistoryModel;
    private readonly addressModel;
    private readonly providerAddressModel;
    private readonly providerLanguageModel;
    private readonly providerAffilationModel;
    private readonly providerHospitalModel;
    private readonly providerEducationModel;
    private readonly providerReferenceModel;
    private readonly providerServicesModel;
    private readonly ratingHistoryModel;
    private readonly providerSpecalityModel;
    private userCreateService;
    private emailService;
    private readonly sequelize;
    constructor(userModel: typeof User, providerModel: typeof Provider, providerHistoryModel: typeof ProviderHistory, addressModel: typeof Address, providerAddressModel: typeof ProviderAddress, providerLanguageModel: typeof ProviderLanguage, providerAffilationModel: typeof ProviderAffilation, providerHospitalModel: typeof ProviderHospital, providerEducationModel: typeof ProviderEducation, providerReferenceModel: typeof ProviderReference, providerServicesModel: typeof ProviderServices, ratingHistoryModel: typeof RatingHistory, providerSpecalityModel: typeof ProviderSpecality, userCreateService: UserCreateService, emailService: EmailService, sequelize: Sequelize);
    createProvider(providerData: ProviderDto): Promise<any>;
    saveProviderAddress(addressData: AddressDto, transaction: Transaction, patientId?: any): Promise<any>;
    saveProviderHistoryInfo(providerData: ProviderDto, action: string, transaction: Transaction, providerId?: any): Promise<ProviderHistory>;
    saveProviderInfo(providerData: ProviderDto, action: string, transaction: Transaction): Promise<Provider>;
    saveSpeciality(data: {
        providerId: string;
        specialities: Array<number>;
    }, transaction: Transaction): Promise<any>;
    saveLanguages(data: {
        providerId: string;
        languages: Array<number>;
    }, transaction: Transaction): Promise<any>;
    saveAffiliations(data: {
        providerId: string;
        hospitals: Array<string>;
    }, transaction: Transaction): Promise<any>;
    saveEducations(data: {
        providerId: string;
        educations: Array<ProviderEducationDto>;
    }, transaction: Transaction): Promise<any>;
    saveHospitals(data: {
        providerId: string;
        hospitals: Array<ProviderHospitalDto>;
    }, transaction: Transaction): Promise<any>;
    saveReferences(data: {
        providerId: string;
        references: Array<ProviderReferenceDto>;
    }, transaction: Transaction): Promise<any>;
    saveServices(data: {
        providerId: string;
        services: Array<number>;
    }, transaction: Transaction): Promise<any>;
    updateBasicInfo(data: any): Promise<any>;
    updateTraining(data: any): Promise<any>;
    updateReferences(data: any): Promise<any>;
    updateBackground(data: any): Promise<any>;
    updateCulturalBackground(data: any): Promise<any>;
    updateAffilations(data: any): Promise<any>;
    updateStatus(data: any): Promise<any>;
    saveRating(data: any): Promise<any>;
}
