import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    HasMany,
    BelongsTo,
} from 'sequelize-typescript';
import { Provider } from './provider.model';

@Table
export class ProviderHistory extends Model<ProviderHistory> {
    @ForeignKey(() => Provider)
    @Column
    providerId: number;

    @Column(DataType.TEXT({ length: 'medium' }))
    religoiusAffiliations: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    specialBackground: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    limitations: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    drugAddiction: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    crimianalRecord: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    malpractice: string;

    @BelongsTo(() => Provider)
    provider: Provider;
}
