'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let matchResults = require("../data.json").matchResults;
    matchResults = matchResults.map(el => {
      let { placeName, placeImgUrl, teamA, teamB, overview, date, time, fulltime, teamALogo, teamBLogo, teamAScore, teamBScore, highlightUrl, insightImgUrl, insightVideoUrl, insightDate, insightTime, insightLeague, insightSeason, insightFulltime, locationUrl, gmapIframe, teamA1HScore, teamA2HScore, teamB1HScore, teamB2HScore, referee, assistantRef, timeKeepers } = el;
      const dateEvent = new Date(date);
      const createdAt = new Date();
      const updatedAt = new Date();
      return {placeName, placeImgUrl, teamA, teamB, overview, date: dateEvent, time, fulltime, teamALogo, teamBLogo, teamAScore, teamBScore, highlightUrl, insightImgUrl, insightVideoUrl, insightDate, insightTime, insightLeague, insightSeason, insightFulltime, locationUrl, gmapIframe, teamA1HScore, teamA2HScore, teamB1HScore, teamB2HScore, referee, assistantRef, timeKeepers, createdAt, updatedAt};
    });
    await queryInterface.bulkInsert('MatchResults', matchResults, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MatchResults', null, {});
  }
};
