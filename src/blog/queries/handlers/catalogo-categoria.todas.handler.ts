import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { CatalogoTecnologiaRepository } from "src/blog/repositorio/catalogo-tecnologia.repositorio";
import { CatalogoTecnologiaQueryTodas } from "../impl/all.query";

@QueryHandler(CatalogoTecnologiaQueryTodas)
export class GetCatalogoTodasHandler implements IQueryHandler<CatalogoTecnologiaQueryTodas> {
  constructor(private readonly catalogoRepositorio: CatalogoTecnologiaRepository) {
  }
  async execute(query: CatalogoTecnologiaQueryTodas) {
    return this.catalogoRepositorio.find();
  }
}
