import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {ApiBearerAuth, ApiOperation, ApiTags} from "@nestjs/swagger";


@ApiBearerAuth()
@ApiTags('Authentication')
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @ApiOperation({summary: 'Login with username and password'})
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @ApiOperation({summary: 'Get profile of one user'})
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
