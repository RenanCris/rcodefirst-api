import {MinLength, MaxLength, IsNotEmpty} from "class-validator";

export class CatalogoDto{
    
    @MaxLength(50, {
        message: "Descricao muito grande. Máximo:  $constraint1"
    })
    public descricao: string;

    @MinLength(10, {
        message: "Categoria com mínimo de  $constraint1"
    })
    public  categoria: string;

    @MinLength(5, {
        message: "Tag com mínimo de  $constraint1"
    })
    public  tag: string;

    @MinLength(10, {
        message: "icone com mínimo de  $constraint1"
    })
    public  icone: string;
}

export class CatalogoAlterarDto extends CatalogoDto {
  
    public  idCatalogo: number;
  
}