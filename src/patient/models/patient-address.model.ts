import { Address } from "@app/src/users/models/address.model";
import { Table, Model, ForeignKey, Column, BelongsTo } from "sequelize-typescript";
import { Patient } from "./patient.model";

@Table
export class PatientAddress extends Model<PatientAddress> {

    @ForeignKey(() => Patient)
    @Column
    patientId: number;

    @Column
    type: string;

    @ForeignKey(() => Address)
    addressId: number;

    @BelongsTo(() => Patient)
    patient: Patient;

    @BelongsTo(() => Address)
    address: Address;
}