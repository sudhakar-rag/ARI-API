export declare enum AppointmentSlotType {
    DAY = "DAY",
    DATE = "DATE"
}
export declare class AppointmentIntervalDto {
    start: string;
    end: string;
}
export declare class AppointmentSlotDto {
    type: 'DAY' | 'DATE';
    value: string;
    intervals: Array<AppointmentIntervalDto>;
}
export declare class AppointmentAvailabilityDto {
    providerId: number;
    slots: Array<AppointmentSlotDto>;
}
export declare class ProviderSettingItemDto {
    label: string;
    value: string;
}
export declare class ProviderSettingsDto {
    providerId: number;
    settings: Array<ProviderSettingItemDto>;
}
