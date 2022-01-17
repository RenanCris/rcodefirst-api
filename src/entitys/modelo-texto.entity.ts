import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ModeloTexto {
  @PrimaryGeneratedColumn()
  idModelo: number;

  @Column("varchar", { length: 50, nullable:false, unique:true })
  descricao: string;

  @Column("longtext", { nullable:false })
  texto: string;
}