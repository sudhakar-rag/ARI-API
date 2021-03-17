import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Provider } from './provider.model';

@Table
export class ProviderEducation extends Model<ProviderEducation> {
  @ForeignKey(() => Provider)
  @Column
  providerId: number;

  @Column
  school: string;

  @Column
  degree: string;

  @Column
  fromYear: number;

  @Column
  toYear: number;

  @BelongsTo(() => Provider)
  provider: Provider;
}
