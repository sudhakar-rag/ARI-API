import { SharedService } from './../services/shared.service';
import { ResponseData } from '@app/src/core/common/response-data';
import { UsersService } from '@app/src/users/services/users.service';
export declare class SharedController {
    private sharedService;
    private usersService;
    constructor(sharedService: SharedService, usersService: UsersService);
    getMedicalProblems(): Promise<ResponseData>;
    getSymptoms(): Promise<ResponseData>;
    getSpecialists(): Promise<ResponseData>;
    getLanaguages(): Promise<ResponseData>;
    getServices(): Promise<ResponseData>;
    getProviderTypes(): Promise<ResponseData>;
    getStates(): Promise<ResponseData>;
    getCountries(): Promise<ResponseData>;
    getSubscriptions(): Promise<ResponseData>;
    getAddress(addressId: string): Promise<ResponseData>;
    updateAppointmentDetails(appointmentData: any): Promise<ResponseData>;
    getAppointmentDetails(appointmentId: number): Promise<ResponseData>;
    updatePicture(userData: any): Promise<ResponseData>;
    updateSub(subData: any): Promise<ResponseData>;
}
