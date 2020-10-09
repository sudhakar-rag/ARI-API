import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedicalProblems } from './models/medical-problems.model';
import { ProviderType } from './models/provider-type.model';
import { Specalist } from './models/specalist.model';
import { Subscription } from './models/subscription.model';
import { Symptom } from './models/symptom.model';

@Module({
    imports: [
        SequelizeModule.forFeature([
            MedicalProblems,
            ProviderType,
            Specalist,
            Symptom,
            Subscription
        ])
    ],
})
export class SharedModule { }
