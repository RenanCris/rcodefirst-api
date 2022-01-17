import { ModeloTexto } from './../entitys/modelo-texto.entity';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Usuario } from "src/entitys/usuario.entity";
import { CatalogoTecnologia } from "src/entitys/catalogo-tecnologia.entity";
import { Postagem } from "src/entitys/post.entity";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
        type: 'mysql',
        host: process.env.BD_IP,
        port: parseInt(process.env.BD_IP_PORT),
        username: process.env.BD_USER,
        password: process.env.BD_SENHA,
        database: process.env.BD_SCHEMA,
        entities: [Usuario,CatalogoTecnologia,Postagem, ModeloTexto],
        synchronize: true,
        keepConnectionAlive:true,
        migrationsTableName: "migracao",
        migrations: ["migration/*.js"],
        logging: true
      };
  }
}