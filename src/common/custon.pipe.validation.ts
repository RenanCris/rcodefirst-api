import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ForbidenResponseHandler } from './reponse.interface';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    const _errosMenessage = [];

    errors.forEach(element => {
        const key = Object.keys(element.constraints);
        key.forEach(k => {
            _errosMenessage.push(element.constraints[`${k}`])
        });
    });

    if (errors.length > 0) {
      throw new HttpException(new ForbidenResponseHandler().response(_errosMenessage),HttpStatus.FORBIDDEN)
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}