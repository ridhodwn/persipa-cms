'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MatchResults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      placeName: {
        type: Sequelize.STRING
      },
      placeImgUrl: {
        type: Sequelize.STRING
      },
      teamA: {
        type: Sequelize.STRING
      },
      teamB: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.TEXT
      },
      date: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.STRING
      },
      fulltime: {
        type: Sequelize.STRING
      },
      teamALogo: {
        type: Sequelize.STRING
      },
      teamBLogo: {
        type: Sequelize.STRING
      },
      teamAScore: {
        type: Sequelize.INTEGER
      },
      teamBScore: {
        type: Sequelize.INTEGER
      },
      highlightUrl: {
        type: Sequelize.STRING
      },
      insightImgUrl: {
        type: Sequelize.STRING
      },
      insightVideoUrl: {
        type: Sequelize.STRING
      },
      insightDate: {
        type: Sequelize.DATE
      },
      insightTime: {
        type: Sequelize.STRING
      },
      insightLeague: {
        type: Sequelize.STRING
      },
      insightSeason: {
        type: Sequelize.INTEGER
      },
      insightFulltime: {
        type: Sequelize.INTEGER
      },
      locationUrl: {
        type: Sequelize.STRING
      },
      gmapIframe: {
        type: Sequelize.STRING
      },
      teamA1HScore: {
        type: Sequelize.INTEGER
      },
      teamA2HScore: {
        type: Sequelize.INTEGER
      },
      teamB1HScore: {
        type: Sequelize.INTEGER
      },
      teamB2HScore: {
        type: Sequelize.INTEGER
      },
      referee: {
        type: Sequelize.STRING
      },
      assistantRef: {
        type: Sequelize.STRING
      },
      timeKeepers: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('MatchResults');
  }
};