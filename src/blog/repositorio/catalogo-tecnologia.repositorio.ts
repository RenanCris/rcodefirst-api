import { Usuario } from "../../entitys/usuario.entity";
import { Repository, EntityRepository } from "typeorm";
import { Observable } from "rxjs";
import { CatalogoTecnologia } from "src/entitys/catalogo-tecnologia.entity";

@EntityRepository(CatalogoTecnologia)
export class CatalogoTecnologiaRepository extends Repository<CatalogoTecnologia> {
    
    async obterCatalogoPorTag(tag:string) : Promise<CatalogoTecnologia[]> {
        return await this.find({tag:tag});
    }

    async existCatalogoPorDescricao(descricao:string) : Promise<boolean> {
        return await this.count({descricao:descricao}) > 0;
    }

    async obterCatalogoPorDescricao(descricao:string) : Promise<CatalogoTecnologia[]> {
        return await this.find({descricao:descricao});
    }
    
}