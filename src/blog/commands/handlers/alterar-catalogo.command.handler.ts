import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CadastrarCatalogoCommand } from '../cadastrar-catalogo.command';
import { CatalogoTecnologiaRepository } from 'src/blog/repositorio/catalogo-tecnologia.repositorio';
import { BaseHandler } from 'src/common/base.handler';
import { AlterarCatalogoCommand } from '../alterar-categoria.command';

@CommandHandler(AlterarCatalogoCommand)
export class AlterarCatalogoCommandHandler extends BaseHandler implements ICommandHandler<AlterarCatalogoCommand> {
  
  constructor(
    private readonly repository: CatalogoTecnologiaRepository,
  ) {
    super();
  }

  async execute(command: AlterarCatalogoCommand) {

    const catalogo = await this.repository.obterCatalogoPorDescricao(command.descricao);

    if(await this.repository.existCatalogoPorDescricao(command.descricao)  && catalogo.find(x => x.idCatalogo != command.idCatalogo) != undefined){
      throw this.Forbid("Já existe uma categoria com esse nome.");
    }

    this.repository.save(command);
    return this.Ok();
  }
}