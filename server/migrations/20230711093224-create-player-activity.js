'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PlayerActivities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      season: {
        type: Sequelize.INTEGER
      },
      club: {
        type: Sequelize.STRING
      },
      goals: {
        type: Sequelize.INTEGER
      },
      assists: {
        type: Sequelize.INTEGER
      },
      yellowCards: {
        type: Sequelize.INTEGER
      },
      redCards: {
        type: Sequelize.INTEGER
      },
      appearances: {
        type: Sequelize.INTEGER
      },
      winRatio: {
        type: Sequelize.INTEGER
      },
      drawRatio: {
        type: Sequelize.INTEGER
      },
      lossRatio: {
        type: Sequelize.INTEGER
      },
      ownGoals: {
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
    await queryInterface.dropTable('PlayerActivities');
  }
};