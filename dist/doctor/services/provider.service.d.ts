import { RatingHistory } from './../models/rating-history';
import { Provider } from '../models/provider.model';
import { AppointmentAvailabilityDto, ProviderSettingsDto } from '../dto/appointment-availability.dto';
import { ProviderAvailability } from '../models/provider-availability.model';
import { ProviderAvailabilitySlot } from '../models/provider-availability-slot.model';
import { Sequelize } from 'sequelize-typescript';
import { ProviderSetting } from '../models/provider-settings.model';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
import { Appointment } from '../../shared/models/appointment.model';
export declare class ProviderService {
    private readonly providerModel;
    private readonly providerAvailabilityModel;
    private readonly providerAvailabilitySlotModel;
    private readonly providerSettingModel;
    private readonly ratingHistoryModel;
    private readonly appointmentModel;
    private readonly sequelize;
    constructor(providerModel: typeof Provider, providerAvailabilityModel: typeof ProviderAvailability, providerAvailabilitySlotModel: typeof ProviderAvailabilitySlot, providerSettingModel: typeof ProviderSetting, ratingHistoryModel: typeof RatingHistory, appointmentModel: typeof Appointment, sequelize: Sequelize);
    getProviders(queryParams: ListQueryParamsDto): Promise<any>;
    getAppointments(queryParams: ListQueryParamsDto): Promise<any>;
    getProviderById(providerId: string): Promise<any>;
    getProviderRatingById(userId: string): Promise<any>;
    getAvailability(providerId: string): Promise<any>;
    getAvailabilityByDay(params: any): Promise<any>;
    saveAvailability(availabilityData: AppointmentAvailabilityDto): Promise<any>;
    saveSettings(providerSettings: ProviderSettingsDto): Promise<any>;
    getProviderSettings(providerId: string): Promise<any>;
    deleteProvider(id: number): Promise<any>;
}
