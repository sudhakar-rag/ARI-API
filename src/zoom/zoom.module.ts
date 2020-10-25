import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '../core/config/config.module';
import { ZoomController } from './controllers/zoom.controller';
import { ZoomService } from './services/zoom.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.register({ folder: './config' }),
  ],
  controllers: [ZoomController],
  providers: [ZoomService]
})
export class ZoomModule { }
