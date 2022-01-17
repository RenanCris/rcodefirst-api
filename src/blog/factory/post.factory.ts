import { IFactory } from "./factory";
import { Postagem } from "src/entitys/post.entity";

export class PostFactory implements IFactory<Postagem>{

    create(...args: any[]): Postagem {
        return new Postagem(args[0],args[1],args[2],args[3]);
    }
}