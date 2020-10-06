import { ProviderLanguage } from './models/provider-language.model';
import { ProviderReference } from './models/provider-reference.model';
import { ProviderHospital } from './models/provider-hospital.model';
import { ProviderEducation } from './models/provider-education.model';
import { ProviderAffilation } from './models/provider-affilation.model';
import { Speciality } from './models/speciality.model';
import { Language } from './models/language.model';
import { ProviderService } from './services/provider.service';
import { Provider } from './models/provider.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProvidersController } from './controllers/providers.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Provider,
      Speciality,
      Language,
      ProviderLanguage,
      ProviderAffilation,
      ProviderEducation,
      ProviderHospital,
      ProviderReference,
    ]),
  ],
  providers: [ProviderService],
  controllers: [ProvidersController],
  exports: [ProviderService],
})
export class ProviderModule {}
