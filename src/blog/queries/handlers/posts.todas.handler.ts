import { PostRepository } from 'src/blog/repositorio/post.repositorio';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { PostQueryTodas } from "../impl/all.query";

@QueryHandler(PostQueryTodas)
export class PostsQueryTodasHandler implements IQueryHandler<PostQueryTodas> {
  constructor(private readonly repositorio: PostRepository) {
  }
  async execute(query: PostQueryTodas) {
    return this.repositorio
    .createQueryBuilder("post")
      .select("post","autor")
      .addSelect("autor.nome")
      .addSelect("autor.email")
      .addSelect("catalogo")
      .innerJoin("post.autor", "autor")
      .innerJoin("post.catalogoTecnologia", "catalogo")
    .getMany();
  }
}
