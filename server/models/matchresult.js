'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MatchResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MatchResult.hasMany(models.MatchPlayer, {
        foreignKey: 'matchId'
      });
    }
  }
  MatchResult.init({
    placeName: DataTypes.STRING,
    placeImgUrl: DataTypes.STRING,
    teamA: DataTypes.STRING,
    teamB: DataTypes.STRING,
    overview: DataTypes.TEXT,
    date: DataTypes.DATE,
    time: DataTypes.STRING,
    fulltime: DataTypes.STRING,
    teamALogo: DataTypes.STRING,
    teamBLogo: DataTypes.STRING,
    teamAScore: DataTypes.INTEGER,
    teamBScore: DataTypes.INTEGER,
    highlightUrl: DataTypes.STRING,
    insightImgUrl: DataTypes.STRING,
    insightVideoUrl: DataTypes.STRING,
    insightDate: DataTypes.DATE,
    insightTime: DataTypes.STRING,
    insightLeague: DataTypes.STRING,
    insightSeason: DataTypes.INTEGER,
    insightFulltime: DataTypes.INTEGER,
    locationUrl: DataTypes.STRING,
    gmapIframe: DataTypes.STRING,
    teamA1HScore: DataTypes.INTEGER,
    teamA2HScore: DataTypes.INTEGER,
    teamB1HScore: DataTypes.INTEGER,
    teamB2HScore: DataTypes.INTEGER,
    referee: DataTypes.STRING,
    assistantRef: DataTypes.STRING,
    timeKeepers: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MatchResult',
  });
  return MatchResult;
};