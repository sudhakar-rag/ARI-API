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
exports.ProviderAvailability = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const provider_model_1 = require("./../../doctor/models/provider.model");
const provider_availability_slot_model_1 = require("./provider-availability-slot.model");
let ProviderAvailability = class ProviderAvailability extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => provider_model_1.Provider),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProviderAvailability.prototype, "providerId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('DAY', 'DATE')),
    __metadata("design:type", String)
], ProviderAvailability.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderAvailability.prototype, "value", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => provider_model_1.Provider),
    __metadata("design:type", provider_model_1.Provider)
], ProviderAvailability.prototype, "provider", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => provider_availability_slot_model_1.ProviderAvailabilitySlot),
    __metadata("design:type", Array)
], ProviderAvailability.prototype, "slots", void 0);
ProviderAvailability = __decorate([
    sequelize_typescript_1.Table
], ProviderAvailability);
exports.ProviderAvailability = ProviderAvailability;
//# sourceMappingURL=provider-availability.model.js.map