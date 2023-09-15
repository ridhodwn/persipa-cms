"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      commenter: {
        type: Sequelize.STRING,
      },
      commenterImgUrl: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      commentText: {
        type: Sequelize.TEXT,
      },
      commenterEmail: {
        type: Sequelize.STRING,
      },
      commenterWebsite: {
        type: Sequelize.STRING,
      },
      newsId: {
        type: Sequelize.INTEGER,
        references: {
          model: "News",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      parentCommentId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Comments");
  },
};
