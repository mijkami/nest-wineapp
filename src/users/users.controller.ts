import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "../dtos/users-create.dto";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UpdateUserDto} from "../dtos/users-update.dto";
import {UsersInterface} from "../interfaces/users.interface";
import {RolesGuard} from "../guards/auth.guard";
import {Roles} from "../decorators/roles.decorator";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Roles('admin')
  @Post('/create')
  async addUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.addUser(createUserDto);
  }

  @Roles('admin')
  @Get("/all")
  async getAllUsers() : Promise<UsersInterface[]> {
    return this.usersService.getAllUsers();
  }

  @Roles('admin')
  @Get("/id/:_id")
  async getUserById(@Param("_id") id: string): Promise<UsersInterface> {
    return this.usersService.getUserById(id);
  }

  @Roles('admin')
  @Get("/username/:username")
  async getOneUser(@Param("username") username): Promise<UsersInterface> {
    return this.usersService.getOneUser(username);
  }

  @Roles('admin')
  @Put("/update/:id")
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UsersInterface> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Roles('admin')
  @Delete('/remove/:id')
  async removeUser(@Param('id') id: string) : Promise<UsersInterface> {
    return this.usersService.removeUser(id);
  }

}
