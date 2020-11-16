"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomModule = void 0;
const common_1 = require("@nestjs/common");
const config_module_1 = require("../core/config/config.module");
const zoom_controller_1 = require("./controllers/zoom.controller");
const zoom_service_1 = require("./services/zoom.service");
let ZoomModule = class ZoomModule {
};
ZoomModule = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule,
            config_module_1.ConfigModule.register({ folder: './config' }),
        ],
        controllers: [zoom_controller_1.ZoomController],
        providers: [zoom_service_1.ZoomService],
        exports: [zoom_service_1.ZoomService]
    })
], ZoomModule);
exports.ZoomModule = ZoomModule;
//# sourceMappingURL=zoom.module.js.map