import { PostRepository } from 'src/blog/repositorio/post.repositorio';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CatalogoTecnologiaRepository } from 'src/blog/repositorio/catalogo-tecnologia.repositorio';
import { BaseHandler } from 'src/common/base.handler';
import { DeletarCatalogoCommand } from '../deletar-catalogo.command';
import { DeletarPostCommand } from '../deletar-post.command';

@CommandHandler(DeletarPostCommand)
export class DeletarPostCommandHandler extends BaseHandler implements ICommandHandler<DeletarPostCommand> {
  
  constructor(
    private readonly repository: PostRepository,
  ) {
    super();
  }

  async execute(command: DeletarPostCommand) {

    if(await this.repository.existePostPorId(command.id) == false){
      throw this.Forbid("Não existe um post com esse id.");
    }

    this.repository.delete(command.id);
    return this.Ok();
  }
}