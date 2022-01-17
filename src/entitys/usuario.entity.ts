import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Postagem } from './post.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column({ default: true })
  ativo: boolean;

  @OneToMany(type => Postagem, post => post.autor)
  posts: Postagem[];
}