export class CadastrarPostCommand {
    constructor(
      public readonly titulo: string,
      public readonly texto: string,
      public readonly autorId: number,
      public readonly catalogoTecnologiaIdCatalogo: number
    ) {}
  }
