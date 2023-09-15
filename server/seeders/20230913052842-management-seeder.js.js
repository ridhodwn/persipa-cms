'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let managements = require("../data.json").managements;
    managements = managements.map(el => {
      let { name, position, imageUrl, nationality, flagUrl, currentTeam, pastTeam, age } = el;
      const createdAt = new Date();
      const updatedAt = new Date();
      return {name, position, imageUrl, nationality, flagUrl, currentTeam, pastTeam, age, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('Management', managements, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Management', null, {});
  }
};
