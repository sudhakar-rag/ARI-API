import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './models/user.model';
import { Group } from './models/group.model';
import { Role } from './models/role.model';
import { UserRole } from './models/user-role.model';
import { UserGroup } from './models/user-group.model';
import { UserAddress } from './models/user-address.model';
import { UserBankDetail } from './models/user-bank-detail';
import { Address } from './models/address.model';
import { UserCreateService } from './services/user-create.service';
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      User,
      Group,
      Role,
      UserRole,
      UserGroup,
      Address,
      UserAddress,
      UserBankDetail,
    ]),
  ],
  providers: [UsersService, UserCreateService, RolesService],
  controllers: [UsersController, RolesController],
  exports: [UsersService, UserCreateService],
})
export class UsersModule {}
