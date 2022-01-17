import { Module, ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './log.middlerware';
import { BaseController } from './base.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers:[LoggerMiddleware, ValidationPipe],
  imports: [
    AuthModule
  ],
  controllers: [BaseController],
  exports: [LoggerMiddleware, ValidationPipe]
})
export class ComumModule {}
