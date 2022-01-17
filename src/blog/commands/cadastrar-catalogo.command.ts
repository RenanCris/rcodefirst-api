export class CadastrarCatalogoCommand {
    constructor(
      public readonly descricao: string,
      public readonly categoria: string,
      public readonly tag: string,
      public readonly icone: string
    ) {}
  }

