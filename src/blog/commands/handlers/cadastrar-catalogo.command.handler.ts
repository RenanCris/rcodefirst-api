import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CadastrarCatalogoCommand } from '../cadastrar-catalogo.command';
import { CatalogoTecnologiaRepository } from 'src/blog/repositorio/catalogo-tecnologia.repositorio';
import { BaseHandler } from 'src/common/base.handler';

@CommandHandler(CadastrarCatalogoCommand)
export class CadastrarCatalogoCommandHandler extends BaseHandler implements ICommandHandler<CadastrarCatalogoCommand> {
  
  constructor(
    private readonly repository: CatalogoTecnologiaRepository,
  ) {
    super();
  }

  async execute(command: CadastrarCatalogoCommand) {

    if(await this.repository.existCatalogoPorDescricao(command.descricao)){
      throw this.Forbid("Já existe uma categoria com esse nome.");
    }

    this.repository.save(command);
    return this.Ok();
  }
}