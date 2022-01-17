export interface IResponseHandler{
    sucess:boolean;
    data:[];
    statusCode:number;
}

export abstract class ResponseHandler implements IResponseHandler{
    sucess: boolean;
    data;
    statusCode: number;

    constructor(sucess, statusCode) {
        this.sucess = sucess;
        this.statusCode = statusCode;
    }

    response(data: any): IResponseHandler{
        return {
            sucess: this.sucess,
            statusCode: this.statusCode,
            data: data
        }
    }
} 

export class FailResponseHandler extends ResponseHandler
{
    constructor() {
        super(false,400);
    }
}

export class ForbidenResponseHandler extends ResponseHandler
{
    constructor() {
        super(false,403);
    }
}

export class OkResponseHandler extends ResponseHandler
{
    constructor() {
        super(true,200);
    }
}