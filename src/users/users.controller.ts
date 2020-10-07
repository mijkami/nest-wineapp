import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "../dtos/users-create.dto";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UpdateUserDto} from "../dtos/users-update.dto";
import {UsersInterface} from "../interfaces/users.interface";
import {RolesGuard} from "../guards/auth.guard";
import {Roles} from "../decorators/roles.decorator";
import {ApiBearerAuth, ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({summary: 'Add one user'})
  @Roles('admin')
  @Post('/create')
  async addUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.addUser(createUserDto);
  }

  @ApiOperation({summary: 'Get all users'})
  @Roles('admin')
  @Get("/all")
  async getAllUsers() : Promise<UsersInterface[]> {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({summary: 'Get one user with its ID'})
  @Roles('admin')
  @Get("/id/:_id")
  async getUserById(@Param("_id") id: string): Promise<UsersInterface> {
    return this.usersService.getUserById(id);
  }

  @ApiOperation({summary: 'Get one user with its username'})
  @Roles('admin')
  @Get("/username/:username")
  async getOneUser(@Param("username") username): Promise<UsersInterface> {
    return this.usersService.getOneUser(username);
  }

  @ApiOperation({summary: 'Update one user with its ID'})
  @Roles('admin')
  @Put("/update/:id")
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UsersInterface> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @ApiOperation({summary: 'Remove one user with its ID'})
  @Roles('admin')
  @Delete('/remove/:id')
  async removeUser(@Param('id') id: string) : Promise<UsersInterface> {
    return this.usersService.removeUser(id);
  }

}
