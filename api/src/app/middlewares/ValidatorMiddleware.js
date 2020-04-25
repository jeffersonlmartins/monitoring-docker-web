import * as Joi from 'joi';
import BadRequestException from '../exceptions/BadRequestException';

export default (schema, property) => {
  return (req, res, next) => {
    const { error } = Joi.validate(req[property] || {}, schema);

    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map(i => i.message).join(', ');

      throw new BadRequestException(message);
    }
  };
};
