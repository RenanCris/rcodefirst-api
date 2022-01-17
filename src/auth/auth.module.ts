import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthenticationController } from './autenticacao.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Module({
  providers:[AuthService, LocalStrategy, JwtStrategy, JwtAuthGuard, LocalAuthGuard],
  imports: [
    UsuarioModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET_KEY,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRATION_TIME + 's',
        },
      }),
      })
  ],
  controllers: [AuthenticationController ],
  exports:[
    PassportModule
  ]
})
export class AuthModule {}
