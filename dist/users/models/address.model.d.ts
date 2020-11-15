import { Model } from "sequelize-typescript";
export declare class Address extends Model<Address> {
    name: string;
    phone: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    zip: string;
}
