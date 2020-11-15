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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const controller_decorator_1 = require("@nestjs/common/decorators/core/controller.decorator");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const file_upload_service_1 = require("./services/file-upload.service");
let FileController = class FileController {
    constructor(file) {
        this.file = file;
    }
    async upload(folder, file) {
        return await this.file.upload(folder, file);
    }
};
__decorate([
    swagger_1.ApiOperation({ description: 'Upload a file.' }),
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiBody({
        schema: { type: 'object', properties: { file: { type: 'string', format: 'binary' } } }
    }),
    swagger_1.ApiParam({
        required: true,
        name: 'folder',
        description: 'Destination folder for uploaded file. Max 2MB file size allowed.',
    }),
    swagger_1.ApiOkResponse({ description: 'The full URL of the file.' }),
    common_1.HttpCode(200),
    common_1.Post(':folder'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        limits: {
            fileSize: 2 * 1024 * 1024
        }
    })),
    __param(0, common_1.Param('folder')), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "upload", null);
FileController = __decorate([
    swagger_1.ApiTags('file'),
    swagger_1.ApiBearerAuth(),
    controller_decorator_1.Controller('file'),
    __metadata("design:paramtypes", [file_upload_service_1.FileUploadService])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=file.controller.js.map