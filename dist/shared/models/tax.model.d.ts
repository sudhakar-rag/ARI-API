import { Model } from 'sequelize-typescript';
import { State } from './state.model';
export declare class Tax extends Model<Tax> {
    stateId: number;
    price: number;
    type: 'F' | 'P';
    status: boolean;
    state: State;
}
