'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Galleries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventName: {
        type: Sequelize.STRING
      },
      imgUrl1: {
        type: Sequelize.STRING
      },
      imgUrl2: {
        type: Sequelize.STRING
      },
      imgUrl3: {
        type: Sequelize.STRING
      },
      imgUrl4: {
        type: Sequelize.STRING
      },
      imgUrl5: {
        type: Sequelize.STRING
      },
      imgUrl6: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Galleries');
  }
};