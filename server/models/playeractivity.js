'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayerActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PlayerActivity.belongsTo(models.Player, {
        foreignKey: 'playerId'
      });
    }
  }
  PlayerActivity.init({
    playerId: DataTypes.INTEGER,
    season: DataTypes.INTEGER,
    club: DataTypes.STRING,
    goals: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    yellowCards: DataTypes.INTEGER,
    redCards: DataTypes.INTEGER,
    appearances: DataTypes.INTEGER,
    winRatio: DataTypes.INTEGER,
    drawRatio: DataTypes.INTEGER,
    lossRatio: DataTypes.INTEGER,
    ownGoals: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlayerActivity',
  });
  return PlayerActivity;
};