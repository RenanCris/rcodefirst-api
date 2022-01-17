import {MinLength, MaxLength, IsNotEmpty} from "class-validator";

export class PostagemDto{
    
    @MinLength(5, {
        message: "Título com mínimo de  $constraint1"
    })
    @MaxLength(255, {
        message: "Título muito grande. Máximo:  $constraint1"
    })
    public titulo: string;

    @MinLength(50, {
        message: "Texto com mínimo de  $constraint1"
    })
    public  texto: string;

    @IsNotEmpty({
        message: "Precisa ser informado o autor"
    })
    public  autorId: number;

    @IsNotEmpty({
        message: "Precisa ser informado o item do catálogo"
    })
    public  catalogoTecnologiaIdCatalogo: number;
}

export class PostagemAlterarDto extends PostagemDto {
    
    @IsNotEmpty({
        message: "Precisa ser informado o id do Post"
    })
    public  idPost: number;
  
}