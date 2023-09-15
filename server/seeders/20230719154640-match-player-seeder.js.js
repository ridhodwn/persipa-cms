'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let matchPlayers = require("../data.json").matchPlayers;
    matchPlayers = matchPlayers.map(el => {
      let { matchId, club, playerName, playerNumber, playerPosition, playerGoals, playerOwnGoals, playerAssists, playerYellowCards, playerRedCards } = el;
      const createdAt = new Date();
      const updatedAt = new Date();
      return {matchId, club, playerName, playerNumber, playerPosition, playerGoals, playerOwnGoals, playerAssists, playerYellowCards, playerRedCards, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('MatchPlayers', matchPlayers, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MatchPlayers', null, {});
  }
};
