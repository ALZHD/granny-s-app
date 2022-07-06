'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Comment }) {
      this.belongsTo(User, { foreignKey: 'granny_id' });
      this.hasMany(Comment, { foreignKey: 'pic_id' })
    }
  }
  Picture.init({
    url: DataTypes.TEXT,
    granny_id: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    voice: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};