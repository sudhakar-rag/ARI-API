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
exports.ProviderAvailabilitySlot = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const provider_availability_model_1 = require("./provider-availability.model");
let ProviderAvailabilitySlot = class ProviderAvailabilitySlot extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => provider_availability_model_1.ProviderAvailability),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProviderAvailabilitySlot.prototype, "providerAvailabilityId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderAvailabilitySlot.prototype, "startTime", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderAvailabilitySlot.prototype, "endTime", void 0);
ProviderAvailabilitySlot = __decorate([
    sequelize_typescript_1.Table
], ProviderAvailabilitySlot);
exports.ProviderAvailabilitySlot = ProviderAvailabilitySlot;
//# sourceMappingURL=provider-availability-slot.model.js.map