"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      News.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
      News.hasMany(models.NewsTag, {
        foreignKey: "newsId",
      });
      News.hasMany(models.Comment, {
        foreignKey: "newsId",
      });
    }
  }
  News.init(
    {
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      snippet: DataTypes.TEXT,
      views: DataTypes.INTEGER,
      date: DataTypes.DATE,
      content1: DataTypes.TEXT,
      content2: DataTypes.TEXT,
      content3: DataTypes.TEXT,
      content4: DataTypes.TEXT,
      imgUrl1: DataTypes.STRING,
      imgUrl2: DataTypes.STRING,
      vidUrl: DataTypes.STRING,
      quote: DataTypes.STRING,
      quotePerson: DataTypes.STRING,
      quotePersonPos: DataTypes.STRING,
      author: DataTypes.STRING,
      authorImgUrl: DataTypes.STRING,
      authorAbout: DataTypes.TEXT,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "News",
    }
  );
  return News;
};
