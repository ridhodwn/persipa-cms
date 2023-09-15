'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let categories = require("../data.json").categories;
    categories = categories.map(el => {
      let { name } = el;
      const createdAt = new Date();
      const updatedAt = new Date();
      return {name, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('Categories', categories, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
