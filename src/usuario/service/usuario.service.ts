import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioRepository } from '../repositorio/usuario.repositorio';
import { Usuario } from '../../entitys/usuario.entity';
 
@Injectable()
export class UsuarioService {
  constructor(
    private readonly usersRepository: UsuarioRepository
  ) {}
 
  async obterPorEmail(email: string) : Promise<Usuario> {
    const user =  await this.usersRepository.obterUsuarioPorEmail(email);
    if (user) {
      return user;
    }
    throw new HttpException('Esse usuário não existe', HttpStatus.NOT_FOUND);
  }

  async obterPorId(id: number) : Promise<Usuario> {
    const user =  await this.usersRepository.findOne({id: id})
    if (user) {
      return user;
    }
    throw new HttpException('Esse usuário não existe', HttpStatus.NOT_FOUND);
  }
}