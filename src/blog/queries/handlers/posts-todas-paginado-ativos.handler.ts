import { PostRepository } from 'src/blog/repositorio/post.repositorio';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { PostQueryTodas, PostQueryTodasPaginado, PostQueryTodasPaginadoAtivos } from "../impl/all.query";

@QueryHandler(PostQueryTodasPaginadoAtivos)
export class PostsQueryTodasPaginadoAtivoHandler implements IQueryHandler<PostQueryTodasPaginadoAtivos> {
  constructor(private readonly repositorio: PostRepository) {
  }
  async execute(query: PostQueryTodasPaginadoAtivos) {
    
    const criterioTag = query.tag != "" ? " and catalogo.tag = :tag " : "";
    const criterioTexto = query.texto !="" ? " and  post.texto like :texto " : "";

    return this.repositorio
    .createQueryBuilder("post")
      .select("post","autor")
      .addSelect("autor.nome")
      .addSelect("autor.email")
      .addSelect("autor.id")
      .addSelect("catalogo.descricao")
      .addSelect("catalogo.tag")
      .addSelect("catalogo.idCatalogo")
      .addSelect("catalogo.icone")
      .innerJoin("post.autor", "autor")
      .innerJoin("post.catalogoTecnologia", "catalogo")
      .where("post.ativo = :ativo "+ criterioTag + criterioTexto +" ", { ativo: query.ativo
        , tag: query.tag
        , texto: `%${query.texto}%`   })
      .skip((query.take) - 1 * query.skip)
      .take(query.take)
      .orderBy("post.dataPostagem","DESC")
    .getMany();
  }
}
