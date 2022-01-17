import { ModeloTextoRepository } from './../../repositorio/modelo-texto.repositorio';
import { ModeloTextoQueryTodos } from './../impl/all.query';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";

@QueryHandler(ModeloTextoQueryTodos)
export class ModeloTextoHandler implements IQueryHandler<ModeloTextoQueryTodos> {
  constructor(private readonly repositorio: ModeloTextoRepository) {
  }
  async execute(query: ModeloTextoQueryTodos) {
    
    return this.repositorio.find();
    
  }
}
