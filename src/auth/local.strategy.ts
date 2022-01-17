import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'senha',
    });
  }
  
  async validate(email: string, senha: string): Promise<any> {
    return this.authenticationService.getAuthenticatedUser(email, senha);
  }
}