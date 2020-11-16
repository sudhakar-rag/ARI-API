import { PatientDto } from './../dto/patient.dto';
import { Patient } from './../models/patient.model';
import { Sequelize } from 'sequelize-typescript';
import { UserCreateService } from '@app/src/users/services/user-create.service';
import { User } from '@app/src/users/models/user.model';
import { CreateAppointmentDto } from '../../appointment/dto/create-appointment.dto';
import { Appointment } from '@app/src/shared/models/appointment.model';
import { AppointmentDetails } from '@app/src/shared/models/appointment-details.model';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
export declare class PatientService {
    private readonly userModel;
    private readonly patientModel;
    private readonly appointmentModel;
    private readonly appointmentDetailsModel;
    private userCreateService;
    private readonly sequelize;
    constructor(userModel: typeof User, patientModel: typeof Patient, appointmentModel: typeof Appointment, appointmentDetailsModel: typeof AppointmentDetails, userCreateService: UserCreateService, sequelize: Sequelize);
    getPatients(queryParams: any): Promise<any>;
    getPatientById(patientId: string): Promise<any>;
    createPatient(patientData: PatientDto): Promise<any>;
    deletePatient(id: number): Promise<any>;
    saveAppointment(appointmentData: CreateAppointmentDto): Promise<any>;
    getAppointments(queryParams: ListQueryParamsDto): Promise<any>;
}
