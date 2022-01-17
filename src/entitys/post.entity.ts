import { Usuario } from './usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, AfterUpdate } from 'typeorm';
import { CatalogoTecnologia } from './catalogo-tecnologia.entity';
import { threadId } from 'worker_threads';

@Entity("post")
export class Postagem {
    @PrimaryGeneratedColumn()
    idPost: number;

    @Column("varchar", { length: 255 , nullable:false, unique:true})
    titulo: string;

    @Column("text",{nullable:false})
    texto: string;

    @Column("datetime",{nullable:false})
    dataPostagem: Date;

    @Column("timestamp",{nullable:true})
    dataAlteracaoPostagem: Date;

    @ManyToOne(type => Usuario, usuario => usuario.posts,{nullable:false})
    autor: Usuario;

    @ManyToOne(type => CatalogoTecnologia, catalogo => catalogo.posts,{nullable:false})
    catalogoTecnologia: CatalogoTecnologia;

    @Column({ default: false })
    ativo: boolean;

    @AfterUpdate()
    updateCounters() {
        this.dataAlteracaoPostagem = new Date();
    }

    constructor(titulo:string, texto:string,autor:Usuario,catalogo:CatalogoTecnologia) {
        this.titulo = titulo;
        this.texto = texto;
        this.autor = autor;
        this.catalogoTecnologia = catalogo;
    }
}