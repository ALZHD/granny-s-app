'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Picture }) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Picture, { foreignKey: 'pic_id' })
    }
  }
  Comment.init({
    title: DataTypes.TEXT,
    pic_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};