import { Service } from './../../shared/models/services.model';
import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    HasMany
  } from 'sequelize-typescript';
  import { Provider } from './provider.model';
  
  @Table
  export class ProviderServices extends Model<ProviderServices> {
    @ForeignKey(() => Provider)
    @Column
    providerId: number;
  
    @ForeignKey(() => Service)
    @Column
    serviceId: number;
  
    @BelongsTo(() => Provider)
    provider: Provider;

    @BelongsTo(() => Service)
    service: Service;

  }
  