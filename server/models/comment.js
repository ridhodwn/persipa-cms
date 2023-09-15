"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.News, {
        foreignKey: "newsId",
      });
    }
  }
  Comment.init(
    {
      commenter: DataTypes.STRING,
      commenterImgUrl: DataTypes.STRING,
      date: DataTypes.DATE,
      commentText: DataTypes.TEXT,
      commenterEmail: DataTypes.STRING,
      commenterWebsite: DataTypes.STRING,
      newsId: DataTypes.INTEGER,
      parentCommentId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
