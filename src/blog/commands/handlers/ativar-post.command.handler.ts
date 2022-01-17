import { PostRepository } from 'src/blog/repositorio/post.repositorio';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CadastrarCatalogoCommand } from '../cadastrar-catalogo.command';
import { CatalogoTecnologiaRepository } from 'src/blog/repositorio/catalogo-tecnologia.repositorio';
import { BaseHandler } from 'src/common/base.handler';
import { AtivarPostCommand } from '../ativar-post.command';

@CommandHandler(AtivarPostCommand)
export class AtivarPostCommandHandler extends BaseHandler implements ICommandHandler<AtivarPostCommand> {
  
  constructor(
    private readonly repository: PostRepository,
  ) {
    super();
  }

  async execute(command: AtivarPostCommand) {

    if(await this.repository.existePostPorId(command.idPost) == false){
      throw this.Forbid("Post não existe.");
    }

    const post = await this.repository.obterPostPorId(command.idPost);
    post.ativo = command.ativo;

    this.repository.save(post);
    return this.Ok();
  }
}