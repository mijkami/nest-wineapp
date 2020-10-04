import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "../dtos/users-create.dto";
import {UsersService} from "./users.service";
import {UserProfileInterface} from "../interfaces/user-profile.interface";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create')
  async addUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.addUser(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("/all")
  async getAllUsers() : Promise<UserProfileInterface[]> {
    return this.usersService.getAllUsers();
  }

  @Post("/last_name")
  async getOneUser(@Body() last_name): Promise<UserProfileInterface> {
    return this.usersService.getOneUser(last_name);
  }

  @Post("/id")
  async getUserById(@Body() id): Promise<UserProfileInterface> {
    return this.usersService.getUserById(id);
  }
}
