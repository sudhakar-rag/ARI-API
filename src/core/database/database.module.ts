import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

@Module({
    imports: [
        ConfigModule,
        SequelizeModule.forRootAsync({
            useFactory: () => {
                const dbConfig = new ConfigService({ folder: './config' });
                return {
                    dialect: 'mysql',
                    host: dbConfig.get('DATABASE_HOST'),
                    port: +dbConfig.get('DATABASE_PORT'),
                    username: dbConfig.get('DATABASE_USER'),
                    password: dbConfig.get('DATABASE_PASSWORD'),
                    database: dbConfig.get('DATABASE_NAME'),
                    define: {
                        underscored: false
                    },
                    autoLoadModels: true,
                    synchronize: false,
                }
            }
        })
    ],
    providers: []
})
export class DatabaseModule { }
