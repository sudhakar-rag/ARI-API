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
exports.Tax = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const state_model_1 = require("./state.model");
let Tax = class Tax extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => state_model_1.State),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Tax.prototype, "stateId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DECIMAL(10, 3)),
    __metadata("design:type", Number)
], Tax.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('F', 'P')),
    __metadata("design:type", String)
], Tax.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], Tax.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => state_model_1.State),
    __metadata("design:type", state_model_1.State)
], Tax.prototype, "state", void 0);
Tax = __decorate([
    sequelize_typescript_1.Table
], Tax);
exports.Tax = Tax;
//# sourceMappingURL=tax.model.js.map