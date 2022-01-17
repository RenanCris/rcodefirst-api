import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as compression from 'compression';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  app.use(compression());
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('RCodeFirst')
    .setDescription('O conteudo completo de programação')
    .setVersion('1.0')
    .addTag('post')
    .addTag('auth')
    .addTag('catalogo-tec')
    .addTag('usuario')
    .addTag('modelo')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
