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
exports.ZoomController = void 0;
const common_1 = require("@nestjs/common");
const create_token_dto_1 = require("../dto/create-token.dto");
const zoom_service_1 = require("../services/zoom.service");
let ZoomController = class ZoomController {
    constructor(zoomService) {
        this.zoomService = zoomService;
    }
    createToken(tokenRequest) {
        return this.zoomService.createMeeting(tokenRequest);
    }
    getSignature(signatureData) {
        return {
            signature: this.zoomService.getSignature(signatureData)
        };
    }
    async getToken(signatureData) {
        return await this.zoomService.getToken1();
    }
};
__decorate([
    common_1.Post('meeting'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_token_dto_1.CreateZoomTokenDto]),
    __metadata("design:returntype", Object)
], ZoomController.prototype, "createToken", null);
__decorate([
    common_1.Post('signature'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_token_dto_1.CreateSignatureDto]),
    __metadata("design:returntype", Object)
], ZoomController.prototype, "getSignature", null);
__decorate([
    common_1.Post('token'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ZoomController.prototype, "getToken", null);
ZoomController = __decorate([
    common_1.Controller('zoom'),
    __metadata("design:paramtypes", [zoom_service_1.ZoomService])
], ZoomController);
exports.ZoomController = ZoomController;
//# sourceMappingURL=zoom.controller.js.map