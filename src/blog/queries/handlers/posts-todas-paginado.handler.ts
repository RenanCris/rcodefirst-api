import { PostRepository } from 'src/blog/repositorio/post.repositorio';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { PostQueryTodas, PostQueryTodasPaginado } from "../impl/all.query";

@QueryHandler(PostQueryTodasPaginado)
export class PostsQueryTodasPaginadoHandler implements IQueryHandler<PostQueryTodasPaginado> {
  constructor(private readonly repositorio: PostRepository) {
  }
  async execute(query: PostQueryTodasPaginado) {
    
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
      .orWhere("catalogo.tag = :tag", { tag: query.tag })
      .orWhere("post.texto like :texto", { texto: `%${query.texto}%` })
      .skip(query.skip)
      .take(query.take)
      .orderBy("post.ativo", "ASC")
      .addOrderBy("post.dataPostagem","DESC")
    .getMany();
  }
}
