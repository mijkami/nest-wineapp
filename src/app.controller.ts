import {Controller, Request, Post, UseGuards, Get, Req, Body} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.gard';
import {CreateUserDto} from "./users/dto/create-user.dto";

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  /*@UseGuards(LocalAuthGuard)*/
  @Post('auth/login')
  async login(@Req() req: CreateUserDto) {
    return this.authService.login(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

  // @UseGuards(JwtAuthGuard)
  // @Post('user/create')

}
