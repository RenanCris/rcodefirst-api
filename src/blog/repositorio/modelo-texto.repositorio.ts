import { Usuario } from "../../entitys/usuario.entity";
import { Repository, EntityRepository } from "typeorm";
import { Observable } from "rxjs";
import { ModeloTexto } from "src/entitys/modelo-texto.entity";

@EntityRepository(ModeloTexto)
export class ModeloTextoRepository extends Repository<ModeloTexto> {
    
    async obterPorDescricao(descricao:string) : Promise<ModeloTexto[]> {
        return await this.find({descricao:descricao});
    }
    
}