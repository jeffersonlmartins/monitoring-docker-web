import * as Joi from 'joi';

class CommentValidator {
  store() {
    return Joi.object().keys({
      name: Joi.string()
        .min(3)
        .max(255)
        .required(),
      email: Joi.string()
        .email()
        .min(3)
        .max(150)
        .required(),
      comment: Joi.string()
        .min(3)
        .max(1024)
        .required(),
    });
  }

  update() {
    return Joi.object().keys({
      name: Joi.string()
        .min(3)
        .max(255)
        .required(),
      email: Joi.string()
        .email()
        .min(3)
        .max(150)
        .required(),
      comment: Joi.string()
        .min(3)
        .max(1024)
        .required(),
    });
  }
}

export default new CommentValidator();
