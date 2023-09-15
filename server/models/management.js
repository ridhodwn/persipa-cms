'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Management extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Management.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    nationality: DataTypes.STRING,
    flagUrl: DataTypes.STRING,
    currentTeam: DataTypes.STRING,
    pastTeam: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Management',
  });
  return Management;
};