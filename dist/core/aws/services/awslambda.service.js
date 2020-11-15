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
exports.AwsS3Service = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
let AwsS3Service = class AwsS3Service {
    constructor(lambda) {
        this.lambda = lambda;
    }
    async invokeLambda(params) {
        try {
            return params;
        }
        catch (error) {
            console.log(error);
            return {};
        }
    }
};
AwsS3Service = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [AWS.S3])
], AwsS3Service);
exports.AwsS3Service = AwsS3Service;
//# sourceMappingURL=awslambda.service.js.map