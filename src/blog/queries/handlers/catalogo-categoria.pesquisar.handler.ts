import { CatalogoTecnologiaRepository } from 'src/blog/repositorio/catalogo-tecnologia.repositorio';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { CatalogoTecnologiaQuery } from "../impl/all.query";

@QueryHandler(CatalogoTecnologiaQuery)
export class GetCatalogoHandler implements IQueryHandler<CatalogoTecnologiaQuery> {
  constructor(private readonly catalogoRepositorio: CatalogoTecnologiaRepository) {
  }

  async execute(query: CatalogoTecnologiaQuery) {
    return this.catalogoRepositorio.obterCatalogoPorTag(query.tag);
  }
}