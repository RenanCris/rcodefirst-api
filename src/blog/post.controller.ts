import { DeletarPostCommand } from './commands/deletar-post.command';
import { AlterarPostCommand } from './commands/alterar-post.command';
import { Controller, Get, Body, Post, Put, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { CadastrarPostCommand } from './commands/cadastrar-post.command';
import { PostagemDto, PostagemAlterarDto } from './dto/postagem.dto';
import { ValidationPipe } from 'src/common/custon.pipe.validation';
import { AtivarPostCommand, DesativarPostCommand } from './commands/ativar-post.command';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PostQueryTodas, PostQueryTodasPaginado, PostQueryQuantidadeCategoria, PostQueryQuantidadeTag, PostQueryTodasPaginadoAtivos, PostQueryPorId } from './queries/impl/all.query';

@ApiTags('post')
@Controller('post')
export class PostController {
    constructor( private readonly queryBus: QueryBus
        ,  private readonly commandBus: CommandBus){
    }

    @UseGuards(JwtAuthGuard)
    @Put() async alterar(@Body(new ValidationPipe()) post: PostagemAlterarDto){
        return this.commandBus.execute(new AlterarPostCommand(post.idPost
            ,post.titulo
            ,post.texto
            ,post.autorId
            ,post.catalogoTecnologiaIdCatalogo));
    }

    @UseGuards(JwtAuthGuard)
    @Post() async cadastrar(@Body(new ValidationPipe()) post: PostagemDto){
        return this.commandBus.execute(new CadastrarPostCommand(post.titulo
            ,post.texto
            ,post.autorId
            ,post.catalogoTecnologiaIdCatalogo));
    }

    @UseGuards(JwtAuthGuard)
    @Put("ativar/:idPost") async ativarPost(@Param("idPost") idPost: number){
        return this.commandBus.execute(new AtivarPostCommand(idPost));
    }

    @UseGuards(JwtAuthGuard)
    @Put("desativar/:idPost") async desativarPost(@Param("idPost") idPost: number){
        return this.commandBus.execute(new DesativarPostCommand(idPost));
    }

    @UseGuards(JwtAuthGuard)
    @Delete(":idPost") async deletar(@Param("idPost") idPost: number){
        return this.commandBus.execute(new DeletarPostCommand(idPost));
    }
    
    @Get("todas") async obterTodas(){
        return this.queryBus.execute(new PostQueryTodas());
    }

    @Get("id/:id") async obterPorId(@Param("id") id:number){
        return this.queryBus.execute(new PostQueryPorId(id));
    }

    @Get("todas/:skip/:take") async obterTodasPaginado(@Param("skip") skip:number, @Param("take") take:number
    , @Query('tag') tag
    , @Query('texto') texto){
        return this.queryBus.execute(new PostQueryTodasPaginado(skip,take,tag,texto));
    }

    @Get("todas-ativo/:skip/:take") async obterTodasPaginadoAtivo(@Param("skip") skip:number, @Param("take") take:number
    , @Query('tag') tag
    , @Query('texto') texto){
        return this.queryBus.execute(new PostQueryTodasPaginadoAtivos(skip,take,tag,texto,true));
    }

    @Get("quantidade-categoria") async obterPorQuantidadeCategoria() {
        return this.queryBus.execute(new PostQueryQuantidadeCategoria());
    }

    @Get("quantidade-tag") async obterPorTagCategoria() {
        return this.queryBus.execute(new PostQueryQuantidadeTag());
    }
}