import { Table, Model, Column } from "sequelize-typescript";

@Table
export class Address extends Model<Address> {

    @Column
    name: string;

    @Column
    phone: string;

    @Column
    address1: string;

    @Column
    address2: string;

    @Column
    city: string;

    @Column
    state: string;

    @Column
    country: string;

    @Column
    zip: string;
}