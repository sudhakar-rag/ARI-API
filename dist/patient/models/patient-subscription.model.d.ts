import { Subscription } from './../../shared/models/subscription.model';
import { Model } from 'sequelize-typescript';
import { Patient } from './patient.model';
export declare class PatientSubscription extends Model<PatientSubscription> {
    patientId: number;
    subscriptionId: number;
    lastSubscriptionAt: Date;
    patient: Patient;
    subscription: Subscription;
}
