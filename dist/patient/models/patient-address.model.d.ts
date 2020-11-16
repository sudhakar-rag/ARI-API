import { Address } from "@app/src/users/models/address.model";
import { Model } from "sequelize-typescript";
import { Patient } from "./patient.model";
export declare class PatientAddress extends Model<PatientAddress> {
    patientId: number;
    type: string;
    addressId: number;
    patient: Patient;
    address: Address;
}
