import { Router } from 'express';

import CommentController from '../controllers/CommentController';

import validate from '../middlewares/ValidatorMiddleware';
import commentValidator from '../validators/CommentValidator';

export default Router()
  .get('/', CommentController.index)
  .get('/:id', CommentController.get)
  .post('/', validate(commentValidator.store(), 'body'), CommentController.post)
  .put(
    '/:id',
    validate(commentValidator.update(), 'body'),
    CommentController.put
  )
  .delete('/:id', CommentController.delete);
