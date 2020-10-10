import { MedicalProblems } from './../models/medical-problems.model';
import { Sequelize } from 'sequelize-typescript';

import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreateService } from '@app/src/users/services/user-create.service';

@Injectable()
export class SharedService {
  constructor(
    @InjectModel(MedicalProblems)
    private readonly medicalProblemsModel: typeof MedicalProblems,
    private readonly sequelize: Sequelize,
  ) { }

  async getMedicalProblems(): Promise<any> {
    return await this.medicalProblemsModel.findAll();
  }

}
