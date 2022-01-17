import { ObterTodosUsuariosQuery } from './queries/impl/all.query';
import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("usuario")
@Controller('usuario')
export class UsuarioController {
    constructor(private readonly queryBus: QueryBus){}

    @Get("todos") obterTodosUsuarios(){
        return this.queryBus.execute(new ObterTodosUsuariosQuery());
    }
}