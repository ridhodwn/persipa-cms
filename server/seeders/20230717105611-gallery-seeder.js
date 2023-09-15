'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let galleries = require("../data.json").galleries;
    galleries = galleries.map(el => {
      let { eventName, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6 } = el;
      const createdAt = new Date();
      const updatedAt = new Date();
      return {eventName, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('Galleries', galleries, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Galleries', null, {});
  }
};
