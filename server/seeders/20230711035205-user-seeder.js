'use strict';
const { hashPassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let users = require("../data.json").users;
    users = users.map(el => {
      let { username, email, password, role } = el;
      password = hashPassword(password);
      const createdAt = new Date();
      const updatedAt = new Date();
      return {username, email, password, role, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
