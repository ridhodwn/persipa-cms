'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.hasMany(models.PlayerActivity, {
        foreignKey: 'playerId'
      });
    }
  }
  Player.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    about: DataTypes.TEXT,
    nationality: DataTypes.STRING,
    position: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    currentTeam: DataTypes.STRING,
    gamesPlayed: DataTypes.INTEGER,
    flagUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};