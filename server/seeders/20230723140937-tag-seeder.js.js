'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let tags = require("../data.json").tags;
    tags = tags.map(el => {
      let { name } = el;
      const createdAt = new Date();
      const updatedAt = new Date();
      return {name, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('Tags', tags, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
