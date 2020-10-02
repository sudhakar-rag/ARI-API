import { Controller, Get, UseGuards, Post, Req, Body, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { RolesService } from '../../users/services/roles.service';
import { CreateRoleDto } from '../dto/roles.dto';
import { ResponseData } from '@app/src/core/common/response-data';
import { JwtAuthGuard } from '@app/src/auth/guards/jwt-auth.guard';
@Controller('role')
// @UseGuards(JwtAuthGuard)
export class RolesController {

    constructor(
        private usersService: UsersService,
        private rolesService: RolesService
    ) { }

    @Get('')
    async getRoles() {
        let output = new ResponseData();

        try {

            output.data = await this.rolesService.getRoles();

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }

    @Post('list')
    async findRoles(@Body() params) {
        let output = new ResponseData();

        try {

            output.data = await this.rolesService.findRoles(params);

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }

    @Post()
    async saveRoles(@Body() roleData: CreateRoleDto) {
        let output = new ResponseData();

        try {

            output.data = await this.rolesService.saveRole(roleData);

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }

    @Delete(':id')
    async deleteRole(@Param() params) {
        let output = new ResponseData();

        try {

            output.data = await this.rolesService.deleteRole(params.id);

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }


}
