import { PatientsModule } from './patient/patient.module';
import { ProviderModule } from './doctor/provider.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './core/config/config.module';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { SmsModule } from './sms/sms.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.register({ folder: './config' }),
    DatabaseModule,
    UsersModule,
    ProviderModule,
    PatientsModule,
    AuthModule,
    SettingsModule,
    SmsModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
