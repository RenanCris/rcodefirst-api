import { AlterarCatalogoCommandHandler } from './commands/handlers/alterar-catalogo.command.handler';
import { CatalogoDto, CatalogoAlterarDto } from './dto/catalogo.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Controller, Get, Param, Post, Body, UseGuards, Delete, Put } from '@nestjs/common';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { CatalogoTecnologia } from 'src/entitys/catalogo-tecnologia.entity';
import { CadastrarCatalogoCommand } from './commands/cadastrar-catalogo.command';
import { DeletarCatalogoCommand } from "./commands/deletar-catalogo.command";
import { CatalogoTecnologiaQueryTodas, CatalogoTecnologiaQuery } from './queries/impl/all.query';
import { AlterarCatalogoCommand } from './commands/alterar-categoria.command';

@ApiTags('catalogo-tec')
@Controller('catalogo-tecnologia')
export class CatalogoTecnologiaController {
    constructor( private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus){
    }

    @Get("todas") async obterTodas(){
        return this.queryBus.execute(new CatalogoTecnologiaQueryTodas());
    }

    @Get(":tag") async obterPorTag(@Param('tag') tag:string){
        return this.queryBus.execute(new CatalogoTecnologiaQuery(tag));
    }

    @UseGuards(JwtAuthGuard)
    @Post() async cadastrar(@Body() catalogo: CatalogoTecnologia){
        return this.commandBus.execute(new CadastrarCatalogoCommand(catalogo.descricao
            ,catalogo.categoria
            ,catalogo.tag
            ,catalogo.icone));
    }

    @UseGuards(JwtAuthGuard)
    @Put() async alterar(@Body() catalogo: CatalogoAlterarDto){
        return this.commandBus.execute(new AlterarCatalogoCommand(
            catalogo.idCatalogo
            ,catalogo.descricao
            ,catalogo.categoria
            ,catalogo.tag
            ,catalogo.icone));
    }

    @UseGuards(JwtAuthGuard)
    @Delete(":id") async deletar(@Param('id') id:number){
        return this.commandBus.execute(new DeletarCatalogoCommand(id));
    }
}