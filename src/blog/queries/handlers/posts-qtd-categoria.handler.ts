import { PostRepository } from 'src/blog/repositorio/post.repositorio';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { PostQueryQuantidadeCategoria } from "../impl/all.query";

@QueryHandler(PostQueryQuantidadeCategoria)
export class PostsQueryQtdCategoriaHandler implements IQueryHandler<PostQueryQuantidadeCategoria> {
  constructor(private readonly repositorio: PostRepository) {
  }

  async execute(query: PostQueryQuantidadeCategoria) {
    
    return this.repositorio
    .createQueryBuilder("post")
      .select("catalogo.categoria")
      .addSelect("COUNT(1)", "qtd")
      .innerJoin("post.autor", "autor")
      .innerJoin("post.catalogoTecnologia", "catalogo")
      .groupBy("catalogo.categoria")
      .orderBy("catalogo.categoria")
    .getRawMany();
  }
}
