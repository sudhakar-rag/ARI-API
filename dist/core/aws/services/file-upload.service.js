"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const uuid_1 = require("uuid");
const path = require("path");
const config_service_1 = require("../../config/config.service");
let FileUploadService = class FileUploadService {
    constructor(configService, s3) {
        this.configService = configService;
        this.s3 = s3;
    }
    async upload(folder, file) {
        const bucketName = this.configService.get('S3_BUCKET_NAME');
        const fileKey = `${folder}/${uuid_1.v4().replace(/-/g, '')}${path.extname(file.originalname)}`;
        await this.s3.putObject({
            ACL: 'public-read',
            Body: file.buffer,
            Bucket: bucketName,
            Key: fileKey,
            ContentType: file.mimetype,
        }).promise();
        return `https://${bucketName}.s3.amazonaws.com/${fileKey}`;
    }
};
FileUploadService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService, AWS.S3])
], FileUploadService);
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=file-upload.service.js.map