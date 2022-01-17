import { Repository, EntityRepository } from "typeorm";
import { Postagem } from "src/entitys/post.entity";

@EntityRepository(Postagem)
export class PostRepository extends Repository<Postagem> {
    
    async obterPostPorTitulo(titulo:string) : Promise<Postagem[]> {
        return await this.find({titulo:titulo});
    }

    async existePost(titulo:string) : Promise<boolean> {
        return await this.count({titulo:titulo}) > 0;
    }

    async existePostPorId(id:number) : Promise<boolean> {
        return await this.count({idPost:id}) > 0;
    }

    async obterPostPorId(id:number) : Promise<Postagem> {
        return await this.findOne({idPost:id});
    }

    async existeCatalogoAssociadoPost(idCatalogo: number) : Promise<boolean>{
         const {qtd}  = await this.createQueryBuilder("post")
            .select("count(1)", "qtd")
            .innerJoin("post.catalogoTecnologia", "catalogo")
            .where("catalogo.idCatalogo = :id", { id: idCatalogo })
            .getRawOne();
      return qtd > 0;
    }
}