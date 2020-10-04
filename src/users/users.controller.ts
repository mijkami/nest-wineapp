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

  @Get("/id/:_id")
  async getUserById(@Param("_id") id: string): Promise<UserProfileInterface> {
    return this.usersService.getUserById(id);
  }

  @Get("/last_name/:last_name")
  async getOneUser(@Param("last_name") last_name): Promise<UserProfileInterface> {
    return this.usersService.getOneUser(last_name);
  }

}
