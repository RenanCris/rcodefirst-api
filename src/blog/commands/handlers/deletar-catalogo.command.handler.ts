import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CatalogoTecnologiaRepository } from 'src/blog/repositorio/catalogo-tecnologia.repositorio';
import { BaseHandler } from 'src/common/base.handler';
import { DeletarCatalogoCommand } from '../deletar-catalogo.command';
import { PostRepository } from 'src/blog/repositorio/post.repositorio';

@CommandHandler(DeletarCatalogoCommand)
export class DeletarCatalogoCommandHandler extends BaseHandler implements ICommandHandler<DeletarCatalogoCommand> {
  
  constructor(
    private readonly repository: CatalogoTecnologiaRepository,
    private readonly repositoryPost: PostRepository,
  ) {
    super();
  }

  async execute(command: DeletarCatalogoCommand) {

    if(await this.repositoryPost.existeCatalogoAssociadoPost(command.id))
      throw this.Forbid("Existe algum post associado");

    this.repository.delete(command.id);
    return this.Ok();
  }
}