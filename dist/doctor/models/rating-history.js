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
exports.RatingHistory = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const provider_model_1 = require("./provider.model");
const patient_model_1 = require("../../patient/models/patient.model");
let RatingHistory = class RatingHistory extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => provider_model_1.Provider),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RatingHistory.prototype, "providerId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => patient_model_1.Patient),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RatingHistory.prototype, "patientId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RatingHistory.prototype, "rating", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], RatingHistory.prototype, "review", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => provider_model_1.Provider),
    __metadata("design:type", provider_model_1.Provider)
], RatingHistory.prototype, "provider", void 0);
RatingHistory = __decorate([
    sequelize_typescript_1.Table
], RatingHistory);
exports.RatingHistory = RatingHistory;
//# sourceMappingURL=rating-history.js.map