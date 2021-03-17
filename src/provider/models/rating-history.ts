import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType,
  } from 'sequelize-typescript';
  import { Provider } from './provider.model';
  import { Patient } from '@app/src/patient/models/patient.model';

  
  @Table
  export class RatingHistory extends Model<RatingHistory> {
    @ForeignKey(() => Provider)
    @Column
    providerId: number;
  
    @ForeignKey(() => Patient)
    @Column
    patientId: number;

    @Column
    rating: number;

    @Column(DataType.TEXT({ length: 'medium' }))
    review: string;
  
    @BelongsTo(() => Provider)
    provider: Provider;
  }
  