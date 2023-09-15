'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MatchPlayers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matchId: {
        type: Sequelize.INTEGER,
        references: {
          model: "MatchResults",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      club: {
        type: Sequelize.STRING
      },
      playerName: {
        type: Sequelize.STRING
      },
      playerNumber: {
        type: Sequelize.INTEGER
      },
      playerPosition: {
        type: Sequelize.STRING
      },
      playerGoals: {
        type: Sequelize.INTEGER
      },
      playerOwnGoals: {
        type: Sequelize.INTEGER
      },
      playerAssists: {
        type: Sequelize.INTEGER
      },
      playerYellowCards: {
        type: Sequelize.INTEGER
      },
      playerRedCards: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MatchPlayers');
  }
};