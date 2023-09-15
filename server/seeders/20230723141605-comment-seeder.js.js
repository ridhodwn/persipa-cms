'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let comments = require("../data.json").comments;
    comments = comments.map(el => {
      let { commenter, commenterImgUrl, date, commentText, commenterEmail, commenterWebsite, newsId, parentCommentId } = el;
      const dateEvent = new Date(date);
      const createdAt = new Date();
      const updatedAt = new Date();
      return {commenter, commenterImgUrl, date: dateEvent, commentText, commenterEmail, commenterWebsite, newsId, parentCommentId, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('Comments', comments, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
