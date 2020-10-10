import { Address } from "@app/src/users/models/address.model";
import { Table, Model, ForeignKey, Column, BelongsTo } from "sequelize-typescript";
import { Provider } from "./provider.model";

@Table
export class ProviderAddress extends Model<ProviderAddress> {

    @ForeignKey(() => Provider)
    @Column
    providerId: number;

    @Column
    type: string;

    @ForeignKey(() => Address)
    addressId: number;

    @BelongsTo(() => Provider)
    provider: Provider;

    @BelongsTo(() => Address)
    address: Address;
}