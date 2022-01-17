export class AlterarCatalogoCommand {
    constructor(
      public readonly idCatalogo: number,
      public readonly descricao: string,
      public readonly categoria: string,
      public readonly tag: string,
      public readonly icone: string
    ) {}
  }
