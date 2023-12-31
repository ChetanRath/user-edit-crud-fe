import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpStatus,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';
import CustomHttpException from './CustomHttpException';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (!metadata.metatype) return;
    const { error } = this.schema.validate(value);
    if (error)
      throw new CustomHttpException(
        {
          code: HttpStatus.BAD_REQUEST,
          message: `Invalid Argument ${error}`,
        },
        error,
      );
    return value;
  }
}
