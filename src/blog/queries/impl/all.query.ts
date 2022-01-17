export class CatalogoTecnologiaQuery{ 
    constructor(public readonly tag:string) {
    }
}

export class CatalogoTecnologiaQueryTodas{}
export class PostQueryTodas{}
export class PostQueryTodasPaginado{
    constructor(public readonly skip:number
        , public readonly take:number
        , public readonly tag:string
        , public readonly texto:string) {}
}
export class PostQueryQuantidadeCategoria{}
export class PostQueryQuantidadeTag{}

export class PostQueryTodasPaginadoAtivos{
    constructor(public readonly skip:number
        , public readonly take:number
        , public readonly tag:string
        , public readonly texto:string
        , public readonly ativo:boolean) {}
}

export class PostQueryPorId{
    constructor(public readonly id:number){

    }
}

export class ModeloTextoQueryTodos{}