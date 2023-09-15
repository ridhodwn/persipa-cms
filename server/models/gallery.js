'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gallery.init({
    eventName: DataTypes.STRING,
    imgUrl1: DataTypes.STRING,
    imgUrl2: DataTypes.STRING,
    imgUrl3: DataTypes.STRING,
    imgUrl4: DataTypes.STRING,
    imgUrl5: DataTypes.STRING,
    imgUrl6: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gallery',
  });
  return Gallery;
};