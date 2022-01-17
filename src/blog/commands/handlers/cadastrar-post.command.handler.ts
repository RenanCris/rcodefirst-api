import { UsuarioRepository } from './../../../usuario/repositorio/usuario.repositorio';
import { FactoryManager } from './../../factory/fatory.manager';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { BaseHandler } from 'src/common/base.handler';
import { CadastrarPostCommand } from '../cadastrar-post.command';
import { PostRepository } from 'src/blog/repositorio/post.repositorio';
import { UsuarioService } from 'src/usuario/service/usuario.service';
import { CatalogoTecnologiaRepository } from 'src/blog/repositorio/catalogo-tecnologia.repositorio';

@CommandHandler(CadastrarPostCommand)
export class CadastrarPostCommandHandler extends BaseHandler implements ICommandHandler<CadastrarPostCommand> {
  
  constructor(
    private readonly repository: PostRepository,
    private readonly usuarioService: UsuarioService,
    private readonly catalogoRep: CatalogoTecnologiaRepository
    ,
  ) {
    super();
  }

  async execute(command: CadastrarPostCommand) {

    if(await this.repository.existePost(command.titulo)){
      throw this.Forbid("Já existe uma post com esse título.");
    }

    const postagem = FactoryManager.CriarPost(command.titulo
      ,command.texto
      ,await this.usuarioService.obterPorId(command.autorId)
      ,await this.catalogoRep.findOne({idCatalogo: command.catalogoTecnologiaIdCatalogo}));

      postagem.dataPostagem = new Date();

    const post = this.repository.create(postagem);

    try{
       this.repository.save(post);
    }catch(ex){
      throw this.Fail();
    }
    
    return this.Ok();
  }
}