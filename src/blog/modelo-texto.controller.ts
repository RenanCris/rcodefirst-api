
import { Controller, Get} from '@nestjs/common';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { ModeloTextoQueryTodos } from './queries/impl/all.query';

@ApiTags('modelo')
@Controller('modelo-texto')
export class ModeloTextoController {
    constructor( private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus){
    }

    @Get("todos") async obterTodos(){
        return this.queryBus.execute(new ModeloTextoQueryTodos());
    }

}