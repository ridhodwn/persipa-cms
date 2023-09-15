'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let events = require("../data.json").events;
    events = events.map(el => {
      let { name, imgUrl, date, overview, gmapIframe, facilitiesInfo, facilitiesImgUrl1, facilitiesImgUrl2, organizerName, organizerPhone, organizerEmail, organizerWebsite, eventStartTime, eventBreakTime, eventEndTime, venueName, venueAddress, venueCountry } = el;
      const dateEvent = new Date(date);
      const createdAt = new Date();
      const updatedAt = new Date();
      return {name, imgUrl, date: dateEvent, overview, gmapIframe, facilitiesInfo, facilitiesImgUrl1, facilitiesImgUrl2, organizerName, organizerPhone, organizerEmail, organizerWebsite, eventStartTime, eventBreakTime, eventEndTime, venueName, venueAddress, venueCountry, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('Events', events, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
