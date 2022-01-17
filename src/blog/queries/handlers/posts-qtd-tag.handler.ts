import { PostRepository } from 'src/blog/repositorio/post.repositorio';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { PostQueryQuantidadeTag } from "../impl/all.query";

@QueryHandler(PostQueryQuantidadeTag)
export class PostsQueryQtdTagHandler implements IQueryHandler<PostQueryQuantidadeTag> {
  constructor(private readonly repositorio: PostRepository) {
  }

  async execute(query: PostQueryQuantidadeTag) {
    
    return this.repositorio
    .createQueryBuilder("post")
      .select("catalogo.tag")
      .addSelect("COUNT(1)", "qtd")
      .innerJoin("post.autor", "autor")
      .innerJoin("post.catalogoTecnologia", "catalogo")
      .groupBy("catalogo.tag")
      .orderBy("catalogo.tag")
    .getRawMany();
  }
}
