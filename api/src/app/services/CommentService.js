import Comment from '../models/Comment';

import NotFoundException from '../exceptions/NotFoundException';

class CommentService {
  async all() {
    const comments = await Comment.findAll();
    return comments;
  }

  async find(id) {
    const comment = await Comment.findByPk(id);

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    return comment;
  }

  async create(data) {
    const comment = await Comment.create(data);

    return comment;
  }

  async update(id, data) {
    const { name, email, comment } = data;

    const obj = await Comment.findByPk(id);

    if (!obj) {
      throw new NotFoundException('Comment not found');
    }

    const newcomment = await obj.update({ name, email, comment });

    return newcomment;
  }

  async delete(id) {
    const comment = await Comment.findByPk(id);

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    comment.destroy();

    return comment;
  }
}

export default new CommentService();
