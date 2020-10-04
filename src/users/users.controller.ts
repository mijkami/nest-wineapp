import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "../dtos/users-create.dto";
import {UsersService} from "./users.service";
import {UserProfileInterface} from "../interfaces/user-profile.interface";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';


@Controller('users')
@UseGuards(new RolesGuard())
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create')
  @Roles('admin')
  async addUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.addUser(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("/all")
  @Roles('admin')
  async getAllUsers() : Promise<UserProfileInterface[]> {
    return this.usersService.getAllUsers();
  }

  @Post("/last_name")
  @Roles('admin')
  async getOneUser(@Body() last_name): Promise<UserProfileInterface> {
    return this.usersService.getOneUser(last_name);
  }

  @Post("/id")
  @Roles('admin')
  async getUserById(@Body() id): Promise<UserProfileInterface> {
    return this.usersService.getUserById(id);
  }
}