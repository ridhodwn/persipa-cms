'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let newsTags = require("../data.json").newsTags;
    newsTags = newsTags.map(el => {
      let { newsId, tagId } = el;
      const createdAt = new Date();
      const updatedAt = new Date();
      return {newsId, tagId, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('NewsTags', newsTags, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NewsTags', null, {});
  }
};
