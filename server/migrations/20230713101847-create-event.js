'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      overview: {
        type: Sequelize.TEXT
      },
      gmapIframe: {
        type: Sequelize.STRING
      },
      facilitiesInfo: {
        type: Sequelize.TEXT
      },
      facilitiesImgUrl1: {
        type: Sequelize.STRING
      },
      facilitiesImgUrl2: {
        type: Sequelize.STRING
      },
      organizerName: {
        type: Sequelize.STRING
      },
      organizerPhone: {
        type: Sequelize.STRING
      },
      organizerEmail: {
        type: Sequelize.STRING
      },
      organizerWebsite: {
        type: Sequelize.STRING
      },
      eventStartTime: {
        type: Sequelize.STRING
      },
      eventBreakTime: {
        type: Sequelize.STRING
      },
      eventEndTime: {
        type: Sequelize.STRING
      },
      venueName: {
        type: Sequelize.STRING
      },
      venueAddress: {
        type: Sequelize.STRING
      },
      venueCountry: {
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
    await queryInterface.dropTable('Events');
  }
};