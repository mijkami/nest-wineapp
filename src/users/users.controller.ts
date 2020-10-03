import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from "../dtos/users-create.dto";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create')
  async addUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.addUser(createUserDto);
  }
}
