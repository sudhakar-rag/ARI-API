import { Subscription } from './../../shared/models/subscription.model';
import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    HasMany
  } from 'sequelize-typescript';
import { Patient } from './patient.model';
  
  @Table
  export class PatientSubscription extends Model<PatientSubscription> {
    @ForeignKey(() => Patient)
    @Column
    patientId: number;
  
    @ForeignKey(() => Subscription)
    @Column
    subscriptionId: number;

    @Column
    lastSubscriptionAt: Date;
  
    @BelongsTo(() => Patient)
    patient: Patient;

    @BelongsTo(() => Subscription)
    subscription: Subscription;

  }
  