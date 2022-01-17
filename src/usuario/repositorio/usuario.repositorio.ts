import { Usuario } from "../../entitys/usuario.entity";
import { Repository, EntityRepository } from "typeorm";
import { Observable } from "rxjs";

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
    
    async obterUsuarioPorEmail(email:string) : Promise<Usuario> {
        return await this.findOne({email:email});
    }

    async obterTodosUsuarios() : Promise<Usuario[]> {
       return await this.createQueryBuilder("usuario")
        .select("id")
        .addSelect("nome")
        .getRawMany();
    }
}