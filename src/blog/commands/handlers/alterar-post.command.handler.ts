import { UsuarioRepository } from '../../../usuario/repositorio/usuario.repositorio';
import { FactoryManager } from '../../factory/fatory.manager';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { BaseHandler } from 'src/common/base.handler';
import { PostRepository } from 'src/blog/repositorio/post.repositorio';
import { UsuarioService } from 'src/usuario/service/usuario.service';
import { CatalogoTecnologiaRepository } from 'src/blog/repositorio/catalogo-tecnologia.repositorio';
import { AlterarPostCommand } from '../alterar-post.command';

@CommandHandler(AlterarPostCommand)
export class AlterarPostCommandHandler extends BaseHandler implements ICommandHandler<AlterarPostCommand> {
  
  constructor(
    private readonly repository: PostRepository,
    private readonly usuarioService: UsuarioService,
    private readonly catalogoRep: CatalogoTecnologiaRepository
    ,
  ) {
    super();
  }

  async execute(command: AlterarPostCommand) {

    const post = await this.repository.obterPostPorTitulo(command.titulo);

    if(await this.repository.existePost(command.titulo) && post.find(x => x.idPost != command.idPost) != undefined){
      throw this.Forbid("Já existe uma post com esse título.");
    }

    const postagem = FactoryManager.CriarPost(command.titulo
      ,command.texto
      ,await this.usuarioService.obterPorId(command.autorId)
      ,await this.catalogoRep.findOne({idCatalogo: command.catalogoTecnologiaIdCatalogo}));

    postagem.idPost = command.idPost;
    postagem.dataAlteracaoPostagem = new Date();
    
    try{
       this.repository.save(postagem);
    }catch(ex){
      throw this.Fail();
    }
    
    return this.Ok();
  }
}