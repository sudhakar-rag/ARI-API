import { UserGroup } from './../models/user-group.model';
import { Body, Controller, Delete, Get, Param, Post, UseGuards, Put } from '@nestjs/common';
import { CreateUserDto, CreateVendorDto } from '../dto/create-user.dto';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { ResponseData } from '@app/src/core/common/response-data';
import { UserCreateService } from '../services/user-create.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private userCreateService: UserCreateService
  ) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }


  @Post('createVendor')
  async createVendor(@Body() createVendorData: CreateVendorDto): Promise<ResponseData> {
    let output = new ResponseData();

    try {

      output.data = await this.userCreateService.saveVendor(createVendorData);

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;

  }

  @Post('listVendors')
  async listProducts(@Body() queryParams): Promise<ResponseData> {
    let output = new ResponseData();

    try {

      output.data = await this.usersService.listVendors(queryParams);

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('loggedinUser')
  async getLoggedInUserData(): Promise<any> {
    let output = new ResponseData();

    try {
      output.data = await this.usersService.getLoggedinUserData();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne({ id: id });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }

  @Put('resetPassword')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async updatePassword(@Body() userData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.userCreateService.updatePassword(userData);
      output.status = true;

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;

  }

}
