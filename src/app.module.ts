import { TypeOrmConfigService } from './bd/typeorm.config';
import { Module, NestModule, MiddlewareConsumer, RequestMethod, forwardRef } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { TerminusModule } from '@nestjs/terminus';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ComumModule } from './common/common.module';
import { LoggerMiddleware } from './common/log.middlerware';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService}),
    TerminusModule, 
    BlogModule,
    UsuarioModule
    ]
})
export class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL  });
  }
}
