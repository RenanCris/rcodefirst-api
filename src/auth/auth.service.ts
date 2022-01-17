import { UsuarioService } from './../usuario/service/usuario.service';
import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Usuario } from 'src/entitys/usuario.entity';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usuarioService: UsuarioService
  ) {}

  public async getAuthenticatedUser(email: string, plainTextSenha: string) {
    try {
      const user = await this.usuarioService.obterPorEmail(email);
      await this.verifyPassword(plainTextSenha, user.senha);
      user.senha = undefined;

      return user;
    } catch (error) {
      throw new HttpException('Não foi possível autenticar', HttpStatus.BAD_REQUEST);
    }
  }
   
  private async verifyPassword(plainTextSenha: string, hashedPassword: string) {
    var a = await bcrypt.hashSync(plainTextSenha,10);
    const isPasswordMatching = await bcrypt.compareSync(plainTextSenha,hashedPassword);

    if (!isPasswordMatching) {
      throw new HttpException('Senhas não conferem', HttpStatus.BAD_REQUEST);
    }
  }

  async login(user: Usuario) {
    const payload = { email: user.email, nome: user.nome, id: user.id};
    
    return {
      access_token: await this.jwtService.signAsync(payload),
      nome: payload.nome
    };
  }
}