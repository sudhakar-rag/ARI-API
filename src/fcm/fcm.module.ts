import { HttpModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '../core/config/config.module';
import { UserFCMToken } from '../users/models/user-fcm-token.model';
import { User } from '../users/models/user.model';
import { FcmService } from './fcm.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.register({ folder: './config' }),
    SequelizeModule.forFeature([
      User,
      UserFCMToken
    ]),
  ],
  providers: [FcmService],
  exports: [FcmService]
})
export class FcmModule { }
