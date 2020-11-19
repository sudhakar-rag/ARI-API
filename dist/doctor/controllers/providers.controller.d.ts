import { ProviderDto } from './../dto/provider.dto';
import { ProviderService } from './../services/provider.service';
import { ResponseData } from './../../core/common/response-data';
import { CreateProviderService } from '../services/create-provider.service';
import { AppointmentAvailabilityDto, ProviderSettingsDto } from '../dto/appointment-availability.dto';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
export declare class ProvidersController {
    private providerService;
    private createProviderService;
    constructor(providerService: ProviderService, createProviderService: CreateProviderService);
    getSettings(providerId: string): Promise<ResponseData>;
    getProviderById(userId: string): Promise<ResponseData>;
    getProviderRatingById(userId: string): Promise<ResponseData>;
    getProviders(queryParams: ListQueryParamsDto): Promise<ResponseData>;
    getAppointments(queryParams: ListQueryParamsDto): Promise<ResponseData>;
    create(providerData: ProviderDto): Promise<ResponseData>;
    setAvailability(availabilityData: AppointmentAvailabilityDto): Promise<ResponseData>;
    setSettings(settingsData: ProviderSettingsDto): Promise<ResponseData>;
    updateBasicInfo(providerData: any): Promise<ResponseData>;
    updateTraining(providerData: any): Promise<ResponseData>;
    updateReferences(providerData: any): Promise<ResponseData>;
    updateBackground(providerData: any): Promise<ResponseData>;
    updateCulturalBackground(providerData: any): Promise<ResponseData>;
    updateAffilations(providerData: any): Promise<ResponseData>;
    updateStatus(providerData: any): Promise<ResponseData>;
    getAvailability(providerId: string): Promise<ResponseData>;
    getAvailabilityByDay(params: any): Promise<ResponseData>;
    deleteProvider(id: number): Promise<ResponseData>;
}
