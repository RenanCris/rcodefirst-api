import { Module } from '@nestjs/common';
import { UsuarioService } from './service/usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from './repositorio/usuario.repositorio';
import { ObterTodosUsuariosQuery } from './queries/impl/all.query';
import { TodosUsuariosHandler } from './queries/impl/handlers/usaurio-dados.handler';
import { UsuarioController } from './usuario.controller';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioRepository]),
    CqrsModule
  ],
  providers: [UsuarioService, ObterTodosUsuariosQuery, TodosUsuariosHandler],
  exports: [
    UsuarioService
  ],
  controllers:[UsuarioController]
})
export class UsuarioModule {}
