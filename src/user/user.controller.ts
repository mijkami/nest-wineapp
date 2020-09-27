import {Body, Controller, Get, HttpStatus, Post, Res, Response} from '@nestjs/common';
import {UserService} from "./user.service";
import {ApiResponse} from "@nestjs/swagger";
import {CreateUserDto} from "../dtos/create-user.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  public async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('find')
  public async findUsers(@Response() res) {
    const users = await this.userService.findAll();
    return res.status(HttpStatus.OK).json(users);
  }
}
