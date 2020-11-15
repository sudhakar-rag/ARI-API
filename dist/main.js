"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(helmet());
    app.use(rateLimit({
        windowMs: 2 * 60 * 1000,
        max: 100,
    }));
    app.use(compression());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true
    }));
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('ARI')
        .setDescription('ARI API')
        .addBearerAuth()
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map