'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MatchPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MatchPlayer.belongsTo(models.MatchResult, {
        foreignKey: 'matchId'
      });
    }
  }
  MatchPlayer.init({
    matchId: DataTypes.INTEGER,
    club: DataTypes.STRING,
    playerName: DataTypes.STRING,
    playerNumber: DataTypes.INTEGER,
    playerPosition: DataTypes.STRING,
    playerGoals: DataTypes.INTEGER,
    playerOwnGoals: DataTypes.INTEGER,
    playerAssists: DataTypes.INTEGER,
    playerYellowCards: DataTypes.INTEGER,
    playerRedCards: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MatchPlayer',
  });
  return MatchPlayer;
};