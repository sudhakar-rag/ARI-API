"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_controller_1 = require("./controllers/users.controller");
const users_service_1 = require("./services/users.service");
const user_model_1 = require("./models/user.model");
const group_model_1 = require("./models/group.model");
const role_model_1 = require("./models/role.model");
const user_role_model_1 = require("./models/user-role.model");
const user_group_model_1 = require("./models/user-group.model");
const user_address_model_1 = require("./models/user-address.model");
const address_model_1 = require("./models/address.model");
const user_create_service_1 = require("./services/user-create.service");
const roles_controller_1 = require("./controllers/roles.controller");
const roles_service_1 = require("./services/roles.service");
const user_card_detail_1 = require("./models/user-card-detail");
const provider_model_1 = require("../doctor/models/provider.model");
const user_fcm_token_model_1 = require("./models/user-fcm-token.model");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                user_model_1.User,
                group_model_1.Group,
                role_model_1.Role,
                user_role_model_1.UserRole,
                user_group_model_1.UserGroup,
                address_model_1.Address,
                user_address_model_1.UserAddress,
                user_card_detail_1.UserCardDetail,
                provider_model_1.Provider,
                user_fcm_token_model_1.UserFCMToken
            ]),
        ],
        providers: [users_service_1.UsersService, user_create_service_1.UserCreateService, roles_service_1.RolesService],
        controllers: [users_controller_1.UsersController, roles_controller_1.RolesController],
        exports: [users_service_1.UsersService, user_create_service_1.UserCreateService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map