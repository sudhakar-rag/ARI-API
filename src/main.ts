import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const enableHttps = false;
  let app;
  if (enableHttps) {
    const httpsOptions = {
      key: fs.readFileSync("/etc/ssl/certs/besecure_private.key"),
      cert: fs.readFileSync("/etc/ssl/certs/be-secure.in.crt"),
      ca: fs.readFileSync('/etc/ssl/certs/ca-bundle.crt')
    };

    app = await NestFactory.create<NestExpressApplication>(AppModule, { httpsOptions });
  } else {
    app = await NestFactory.create<NestExpressApplication>(AppModule);
  }


  app.enableCors();

  app.use(helmet());

  app.use(
    rateLimit({
      windowMs: 2 * 60 * 1000, // 2 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  app.use(compression());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true
    })
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));


  const options = new DocumentBuilder()
    .setTitle('ARI')
    .setDescription('ARI API')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
