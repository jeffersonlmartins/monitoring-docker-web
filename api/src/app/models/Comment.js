import Sequelize, { Model } from 'sequelize';

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        comment: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Comment;
