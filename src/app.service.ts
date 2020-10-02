import { Injectable } from '@nestjs/common';
import { ConfigService } from './core/config/config.service';

@Injectable()
export class AppService {

  constructor(private configService: ConfigService) {
    // this.helloMessage = configService.get('HELLO_MESSAGE');
  }

  getHello(): string {
    return this.configService.get('DATABASE_PASSWORD');;
  }
}
