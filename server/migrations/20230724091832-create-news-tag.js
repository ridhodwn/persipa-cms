"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("NewsTags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      tagId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tags",
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
    await queryInterface.dropTable("NewsTags");
  },
};
