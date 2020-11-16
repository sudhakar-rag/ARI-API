"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_module_1 = require("../config/config.module");
const config_service_1 = require("../config/config.service");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [
            config_module_1.ConfigModule,
            sequelize_1.SequelizeModule.forRootAsync({
                useFactory: () => {
                    const dbConfig = new config_service_1.ConfigService({ folder: './config' });
                    return {
                        dialect: 'mysql',
                        host: dbConfig.get('DATABASE_HOST'),
                        port: +dbConfig.get('DATABASE_PORT'),
                        username: dbConfig.get('DATABASE_USER'),
                        password: dbConfig.get('DATABASE_PASSWORD'),
                        database: dbConfig.get('DATABASE_NAME'),
                        define: {
                            underscored: false,
                        },
                        autoLoadModels: true,
                        synchronize: false,
                    };
                },
            }),
        ],
        providers: [],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map