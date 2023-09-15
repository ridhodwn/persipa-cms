'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let players = require("../data.json").playerActivities;
    players = players.map(el => {
      let { playerId, season, club, goals, assists, yellowCards, redCards, appearances, winRatio, drawRatio, lossRatio, ownGoals } = el;
      const createdAt = new Date();
      const updatedAt = new Date();
      return {playerId, season, club, goals, assists, yellowCards, redCards, appearances, winRatio, drawRatio, lossRatio, ownGoals, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('PlayerActivities', players, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PlayerActivities', null, {});
  }
};
