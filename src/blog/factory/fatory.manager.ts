import { PostFactory } from "./post.factory";
import { Postagem } from "src/entitys/post.entity";
import { Usuario } from "src/entitys/usuario.entity";
import { CatalogoTecnologia } from "src/entitys/catalogo-tecnologia.entity";

export class FactoryManager {

    static CriarPost(titulo:string, texto:string, autorId:Usuario, catalogoId:CatalogoTecnologia) : Postagem {
        return new PostFactory().create(titulo,texto,autorId,catalogoId);
    }
}