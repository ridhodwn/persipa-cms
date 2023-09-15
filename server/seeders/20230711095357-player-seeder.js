'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let players = require("../data.json").players;
    players = players.map(el => {
      let { name, age, number, about, nationality, position, height, weight, currentTeam, gamesPlayed, flagUrl, imgUrl } = el;
      const createdAt = new Date();
      const updatedAt = new Date();
      return {name, age, number, about, nationality, position, height, weight, currentTeam, gamesPlayed, flagUrl, imgUrl, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('Players', players, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {});
  }
};
