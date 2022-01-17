import { Usuario } from '../entitys/usuario.entity';
import { Body, Req, Controller, HttpCode, Post, UseGuards, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './login.dto';
 
@ApiTags('auth')
@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthService
  ) {
  }
 
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async logIn(@Req() req) {
    return await this.authenticationService.login(req.user);
  }
  
}