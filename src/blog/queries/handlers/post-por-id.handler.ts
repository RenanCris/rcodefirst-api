import { PostRepository } from 'src/blog/repositorio/post.repositorio';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import {  PostQueryPorId } from "../impl/all.query";

@QueryHandler(PostQueryPorId)
export class PostPorIdHandler implements IQueryHandler<PostQueryPorId> {
  constructor(private readonly repositorio: PostRepository) {
  }
  async execute(query: PostQueryPorId) {
    
    return this.repositorio
    .createQueryBuilder("post")
      .select("post","autor")
      .addSelect("autor.nome")
      .addSelect("autor.email")
      .addSelect("autor.id")
      .addSelect("catalogo.descricao")
      .addSelect("catalogo.tag")
      .addSelect("catalogo.idCatalogo")
      .innerJoin("post.autor", "autor")
      .innerJoin("post.catalogoTecnologia", "catalogo")
      .where("post.idPost = :id", { id: query.id })
    .getOne();
  }
}
