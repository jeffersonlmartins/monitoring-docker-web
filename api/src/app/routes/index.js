import { Router } from 'express';
import comments from './comments';

export default Router().use('/comments', comments);
