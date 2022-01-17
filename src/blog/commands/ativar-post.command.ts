export class AtivarPostCommand {
    idPost:number;
    ativo:boolean = true;

    constructor(id:number) {
        this.idPost = id;
    }
}

export class DesativarPostCommand {
    idPost:number;
    ativo:boolean = false;

    constructor(id:number) {
        this.idPost = id;
    }
}