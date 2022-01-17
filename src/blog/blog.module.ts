import { AlterarCatalogoCommandHandler } from './commands/handlers/alterar-catalogo.command.handler';
import { PostsQueryQtdCategoriaHandler } from './queries/handlers/posts-qtd-categoria.handler';
import { DeletarPostCommand } from './commands/deletar-post.command';
import { CadastrarCatalogoCommandHandler } from './commands/handlers/cadastrar-catalogo.command.handler';
import { CatalogoTecnologiaController } from './catalogo-tecnologia.controller';
import { ComumModule } from './../common/common.module';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogoTecnologiaRepository } from './repositorio/catalogo-tecnologia.repositorio';
import { DeletarCatalogoCommandHandler } from './commands/handlers/deletar-catalogo.command.handler';
import { GetCatalogoHandler } from './queries/handlers/catalogo-categoria.pesquisar.handler';
import { GetCatalogoTodasHandler } from './queries/handlers/catalogo-categoria.todas.handler';
import { CatalogoTecnologiaQueryTodas, CatalogoTecnologiaQuery, PostQueryTodas, PostQueryTodasPaginado, PostQueryQuantidadeCategoria, PostQueryQuantidadeTag, PostQueryTodasPaginadoAtivos, PostQueryPorId, ModeloTextoQueryTodos } from './queries/impl/all.query';
import { DeletarCatalogoCommand } from './commands/deletar-catalogo.command';
import { CadastrarCatalogoCommand } from './commands/cadastrar-catalogo.command';
import { CadastrarPostCommand } from './commands/cadastrar-post.command';
import { PostRepository } from './repositorio/post.repositorio';
import { CadastrarPostCommandHandler } from './commands/handlers/cadastrar-post.command.handler';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AtivarPostCommand, DesativarPostCommand } from './commands/ativar-post.command';
import { AtivarPostCommandHandler } from './commands/handlers/ativar-post.command.handler';
import { AlterarPostCommand } from './commands/alterar-post.command';
import { AlterarPostCommandHandler } from './commands/handlers/alterar-post.command.handler';
import { DeletarPostCommandHandler } from './commands/handlers/deletar-post.command.handler';
import { PostsQueryTodasHandler } from './queries/handlers/posts.todas.handler';
import { PostsQueryTodasPaginadoHandler } from './queries/handlers/posts-todas-paginado.handler';
import { PostsQueryQtdTagHandler } from './queries/handlers/posts-qtd-tag.handler';
import { AlterarCatalogoCommand } from './commands/alterar-categoria.command';
import { DesativarPostCommandHandler } from './commands/handlers/desativar-post.command.handler';
import { PostsQueryTodasPaginadoAtivoHandler } from './queries/handlers/posts-todas-paginado-ativos.handler';
import { PostPorIdHandler } from './queries/handlers/post-por-id.handler';
import { ModeloTextoRepository } from './repositorio/modelo-texto.repositorio';
import { ModeloTextoHandler } from './queries/handlers/modelo-texto.handler';
import { ModeloTextoController } from './modelo-texto.controller';

@Module({
    imports: [CqrsModule, ComumModule,TypeOrmModule.forFeature([CatalogoTecnologiaRepository, PostRepository,ModeloTextoRepository]), UsuarioModule],
    controllers: [PostController, CatalogoTecnologiaController,ModeloTextoController ],
    providers: [
        CatalogoTecnologiaQueryTodas,
        GetCatalogoTodasHandler,
        CatalogoTecnologiaQuery,
        GetCatalogoHandler,
        DeletarCatalogoCommand,
        DeletarCatalogoCommandHandler,
        CadastrarCatalogoCommand,
        CadastrarCatalogoCommandHandler,
        CadastrarPostCommand,
        CadastrarPostCommandHandler,
        AtivarPostCommand,
        AtivarPostCommandHandler,
        AlterarPostCommand,
        AlterarPostCommandHandler,
        DeletarPostCommand,
        DeletarPostCommandHandler,
        PostQueryTodas,
        PostsQueryTodasHandler,
        PostQueryTodasPaginado,
        PostsQueryTodasPaginadoHandler,
        PostQueryQuantidadeCategoria,
        PostsQueryQtdCategoriaHandler,
        PostQueryQuantidadeTag,
        PostsQueryQtdTagHandler,
        AlterarCatalogoCommand,
        AlterarCatalogoCommandHandler,
        DesativarPostCommand,
        DesativarPostCommandHandler,
        PostQueryTodasPaginadoAtivos,
        PostsQueryTodasPaginadoAtivoHandler,
        PostQueryPorId,
        PostPorIdHandler,
        ModeloTextoQueryTodos,
        ModeloTextoHandler

    ],
})
export class BlogModule {};