"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("News", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      subtitle: {
        type: Sequelize.STRING,
      },
      snippet: {
        type: Sequelize.TEXT,
      },
      views: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      content1: {
        type: Sequelize.TEXT,
      },
      content2: {
        type: Sequelize.TEXT,
      },
      content3: {
        type: Sequelize.TEXT,
      },
      content4: {
        type: Sequelize.TEXT,
      },
      imgUrl1: {
        type: Sequelize.STRING,
      },
      imgUrl2: {
        type: Sequelize.STRING,
      },
      vidUrl: {
        type: Sequelize.STRING,
      },
      quote: {
        type: Sequelize.STRING,
      },
      quotePerson: {
        type: Sequelize.STRING,
      },
      quotePersonPos: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      authorImgUrl: {
        type: Sequelize.STRING,
      },
      authorAbout: {
        type: Sequelize.TEXT,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("News");
  },
};
