'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    date: DataTypes.DATE,
    overview: DataTypes.TEXT,
    gmapIframe: DataTypes.STRING,
    facilitiesInfo: DataTypes.TEXT,
    facilitiesImgUrl1: DataTypes.STRING,
    facilitiesImgUrl2: DataTypes.STRING,
    organizerName: DataTypes.STRING,
    organizerPhone: DataTypes.STRING,
    organizerEmail: DataTypes.STRING,
    organizerWebsite: DataTypes.STRING,
    eventStartTime: DataTypes.STRING,
    eventBreakTime: DataTypes.STRING,
    eventEndTime: DataTypes.STRING,
    venueName: DataTypes.STRING,
    venueAddress: DataTypes.STRING,
    venueCountry: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};