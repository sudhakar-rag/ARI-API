import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import * as AWS from 'aws-sdk';
import { ConfigService } from '../config/config.service';
import { AwsS3Service } from './services/awslambda.service';
import { FileController } from './file.controller';
import { FileUploadService } from './services/file-upload.service';

@Module({
    imports: [
        ConfigModule.register({ folder: './config' }),
    ],
    controllers: [
        FileController
    ],
    providers: [
        AwsS3Service,
        FileUploadService,
        {
            provide: AWS.S3,
            inject: [ConfigService],
            useFactory: () => {
                const config = new ConfigService({ folder: './config' });
                return new AWS.S3({
                    accessKeyId: config.get('AWS_ACCESS_KEY_ID'),
                    secretAccessKey: config.get('AWS_SECRET_ACCESS_KEY'),
                    region: 'us-east-1'
                })
            }
        }
    ],
    exports: [
        AwsS3Service,
        FileUploadService
    ]
})
export class AwsModule { }
