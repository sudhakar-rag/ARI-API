import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
  import { Provider } from './provider.model';
  
  @Table
  export class ProviderServices extends Model<ProviderServices> {
    @ForeignKey(() => Provider)
    @Column
    providerId: number;
  
    @Column
    serviceId: number;
  
    @BelongsTo(() => Provider)
    provider: Provider;
  }
  