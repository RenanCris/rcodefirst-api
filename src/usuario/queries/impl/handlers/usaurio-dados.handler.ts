import { UsuarioRepository } from './../../../repositorio/usuario.repositorio';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { ObterTodosUsuariosQuery } from '../all.query';

@QueryHandler(ObterTodosUsuariosQuery)
export class TodosUsuariosHandler implements IQueryHandler<ObterTodosUsuariosQuery> {
  constructor(private readonly repository: UsuarioRepository) {
  }

  async execute(query: ObterTodosUsuariosQuery) {
    return this.repository.obterTodosUsuarios();
  }
}