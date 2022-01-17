import { FailResponseHandler, IResponseHandler, ForbidenResponseHandler, OkResponseHandler } from "./reponse.interface";
import { HttpException, HttpStatus, HttpCode } from "@nestjs/common";

export abstract class BaseHandler {
    
    Fail(data: any = "Alguma falha ocorreu") : HttpException {
      return new HttpException(new FailResponseHandler().response(data),HttpStatus.BAD_REQUEST)
    }
    
    Forbid(data: any) : HttpException {
        return new HttpException(new ForbidenResponseHandler().response(data),HttpStatus.FORBIDDEN)
    }

    Ok(data: any = "Sucesso") : IResponseHandler {
        return new OkResponseHandler().response(data)
    }
} 