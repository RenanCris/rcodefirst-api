export class AlterarPostCommand {
  constructor(public readonly idPost: number, public readonly titulo: string, public readonly texto: string, public readonly autorId: number, public readonly catalogoTecnologiaIdCatalogo: number) { }
}
