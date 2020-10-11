import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProviderAddress } from '../models/provider-address.model';
import { ProviderAffilation } from '../models/provider-affilation.model';
import { ProviderEducation } from '../models/provider-education.model';
import { ProviderHistory } from '../models/provider-history.model';
import { ProviderHospital } from '../models/provider-hospital.model';
import { ProviderLanguage } from '../models/provider-language.model';
import { ProviderReference } from '../models/provider-reference.model';
import { Provider } from '../models/provider.model';
@Injectable()
export class ProviderService {
  constructor(
    @InjectModel(Provider)
    private readonly providerModel: typeof Provider,
  ) { }

  async getProviderById(userId: string): Promise<any> {
    return await this.providerModel.findAll({
      where: { userId: userId },
      include: [
        ProviderHistory,
        ProviderAddress,
        ProviderAffilation,
        ProviderEducation,
        ProviderHospital,
        ProviderLanguage,
        ProviderReference
      ]
    });
  }

}
