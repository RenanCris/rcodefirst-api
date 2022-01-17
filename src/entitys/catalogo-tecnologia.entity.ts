import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Postagem } from './post.entity';

@Entity()
export class CatalogoTecnologia {
  @PrimaryGeneratedColumn()
  idCatalogo: number;

  @Column("varchar", { length: 50, nullable:false, unique:true })
  descricao: string;

  @Column("varchar", { length: 10, nullable:false })
  categoria: string;

  @Column("varchar", { length: 5 })
  tag: string;

  @Column("varchar", { length: 10 , nullable:true })
  icone: string;

  @OneToMany(type => Postagem, post => post.autor)
  posts: Postagem[];
}