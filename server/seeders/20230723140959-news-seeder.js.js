'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let news = require("../data.json").news;
    news = news.map(el => {
      let { title, subtitle, snippet, views, date, content1, content2, content3, content4, imgUrl1, imgUrl2, vidUrl, quote, quotePerson, quotePersonPos, author, authorImgUrl, authorAbout, categoryId } = el;
      const dateEvent = new Date(date);
      const createdAt = new Date();
      const updatedAt = new Date();
      return {title, subtitle, snippet, views, date: dateEvent, content1, content2, content3, content4, imgUrl1, imgUrl2, vidUrl, quote, quotePerson, quotePersonPos, author, authorImgUrl, authorAbout, categoryId, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('News', news, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News', null, {});
  }
};
