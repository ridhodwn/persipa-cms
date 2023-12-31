"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NewsTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NewsTag.belongsTo(models.Tag, {
        foreignKey: "tagId",
      });
      NewsTag.belongsTo(models.News, {
        foreignKey: "newsId",
      });
    }
  }
  NewsTag.init(
    {
      newsId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "NewsTag",
    }
  );
  return NewsTag;
};
