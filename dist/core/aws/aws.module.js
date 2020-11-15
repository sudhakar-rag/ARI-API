"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsModule = void 0;
const common_1 = require("@nestjs/common");
const config_module_1 = require("../config/config.module");
const AWS = require("aws-sdk");
const config_service_1 = require("../config/config.service");
const awslambda_service_1 = require("./services/awslambda.service");
const file_controller_1 = require("./file.controller");
const file_upload_service_1 = require("./services/file-upload.service");
let AwsModule = class AwsModule {
};
AwsModule = __decorate([
    common_1.Module({
        imports: [
            config_module_1.ConfigModule.register({ folder: './config' }),
        ],
        controllers: [
            file_controller_1.FileController
        ],
        providers: [
            awslambda_service_1.AwsS3Service,
            file_upload_service_1.FileUploadService,
            {
                provide: AWS.S3,
                inject: [config_service_1.ConfigService],
                useFactory: () => {
                    const config = new config_service_1.ConfigService({ folder: './config' });
                    return new AWS.S3({
                        accessKeyId: config.get('AWS_ACCESS_KEY_ID'),
                        secretAccessKey: config.get('AWS_SECRET_ACCESS_KEY'),
                        region: 'ap-south-1'
                    });
                }
            }
        ],
        exports: [
            awslambda_service_1.AwsS3Service,
            file_upload_service_1.FileUploadService
        ]
    })
], AwsModule);
exports.AwsModule = AwsModule;
//# sourceMappingURL=aws.module.js.map