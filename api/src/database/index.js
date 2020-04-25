import Sequelize from 'sequelize';

import Comment from '../app/models/Comment';

import databaseConfig from '../config/database';

const models = [Comment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
