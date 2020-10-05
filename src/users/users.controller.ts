import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "../dtos/users-create.dto";
import {UsersService} from "./users.service";
import {UserProfileInterface} from "../interfaces/user-profile.interface";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UpdateUserDto} from "../dtos/users-update.dto";


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

  @Get("/username/:username")
  async getOneUser(@Param("username") username): Promise<UserProfileInterface> {
    return this.usersService.getOneUser(username);
  }

  @Put("/update/:id")
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserProfileInterface> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete('/remove/:id')
  async removeUser(@Param('id') id: string) : Promise<UserProfileInterface> {
    return this.usersService.removeUser(id);
  }

}
