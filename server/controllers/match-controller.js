const { MatchResult, MatchPlayer, sequelize } = require('../models');

class MatchController {
    static async createMatch(req, res, next) {
        const t = await sequelize.transaction();
        try {
            let { placeName, placeImgUrl, teamA, teamB, overview, date, time, fulltime, teamALogo, teamBLogo, teamAScore, teamBScore, highlightUrl, insightImgUrl, insightVideoUrl, insightDate, insightTime, insightLeague, insightSeason, insightFulltime, locationUrl, gmapIframe, teamA1HScore, teamA2HScore, teamB1HScore, teamB2HScore, referee, assistantRef, timeKeepers, MatchPlayers } = req.body;
            const dateEvent = new Date(date);
            let matchCreated = await MatchResult.create({placeName, placeImgUrl, teamA, teamB, overview, date: dateEvent, time, fulltime, teamALogo, teamBLogo, teamAScore, teamBScore, highlightUrl, insightImgUrl, insightVideoUrl, insightDate, insightTime, insightLeague, insightSeason, insightFulltime, locationUrl, gmapIframe, teamA1HScore, teamA2HScore, teamB1HScore, teamB2HScore, referee, assistantRef, timeKeepers});
            let matchPlayerCreated = await Promise.all(MatchPlayers.map((matchPlayer) => {
                let { club, playerName, playerNumber, playerPosition, playerGoals, playerOwnGoals, playerAssists, playerYellowCards, playerRedCards } = matchPlayer;
                MatchPlayer.create({ matchId: matchCreated.id, club, playerName, playerNumber, playerPosition, playerGoals, playerOwnGoals, playerAssists, playerYellowCards, playerRedCards });
            }), { transaction: t });
            
            await t.commit();
            res.status(201).json(matchCreated);
        } catch(error) {
            await t.rollback();
            next(error);
        }
    }

    static async readMatches(req, res, next) {
        try {
            let matches = await MatchResult.findAll({
                include: [MatchPlayer],
                order: sequelize.col('id')
            });
            res.status(200).json({matches });
        } catch(error) {
            next(error);
        }
    }

    static async readMatchById(req, res, next) {
        try {
            let { id } = req.params;
            let matchById = await MatchResult.findByPk(id, {
                include: [MatchPlayer]
            });
            if(!matchById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(matchById);
        } catch(error) {
            next(error);
        }
    }

    static async updateMatchById(req, res, next) {
        try {
            let { id } = req.params;
            let { placeName, placeImgUrl, teamA, teamB, overview, date, time, fulltime, teamALogo, teamBLogo, teamAScore, teamBScore, highlightUrl, insightImgUrl, insightVideoUrl, insightDate, insightTime, insightLeague, insightSeason, insightFulltime, locationUrl, gmapIframe, teamA1HScore, teamA2HScore, teamB1HScore, teamB2HScore, referee, assistantRef, timeKeepers } = req.body;
            let dateEvent = new Date(date);
            let matchFound = await MatchResult.findByPk(id);
            if(!matchFound) {
                throw {name: 'Not found'};
            }
            let matchUpdated = await matchFound.update({ placeName, placeImgUrl, teamA, teamB, overview, date: dateEvent, time, fulltime, teamALogo, teamBLogo, teamAScore, teamBScore, highlightUrl, insightImgUrl, insightVideoUrl, insightDate, insightTime, insightLeague, insightSeason, insightFulltime, locationUrl, gmapIframe, teamA1HScore, teamA2HScore, teamB1HScore, teamB2HScore, referee, assistantRef, timeKeepers })

            res.status(200).json(matchUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async readMatchPlayerById(req, res, next) {
        try {
            let { id } = req.params;
            let matchPlayerById = await MatchPlayer.findByPk(id);
            if(!matchPlayerById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(matchPlayerById);
        } catch(error) {
            next(error);
        }
    }

    static async createMatchPlayer(req, res, next) {
        try {
            let { id } = req.params;
            let { club, playerName, playerNumber, playerPosition, playerGoals, playerOwnGoals, playerAssists, playerYellowCards, playerRedCards } = req.body;
            let matchPlayerCreated = await MatchPlayer.create({matchId: id, club, playerName, playerNumber, playerPosition, playerGoals, playerOwnGoals, playerAssists, playerYellowCards, playerRedCards});
            
            res.status(201).json(matchPlayerCreated);
        } catch(error) {
            next(error);
        }
    }

    static async updateMatchPlayerById(req, res, next) {
        try {
            let { id } = req.params;
            let { club, playerName, playerNumber, playerPosition, playerGoals, playerOwnGoals, playerAssists, playerYellowCards, playerRedCards } = req.body;
            let matchPlayerFound = await MatchPlayer.findByPk(id);
            if(!matchPlayerFound) {
                throw {name: 'Not found'};
            }
            let matchPlayerUpdated = await matchPlayerFound.update({ club, playerName, playerNumber, playerPosition, playerGoals, playerOwnGoals, playerAssists, playerYellowCards, playerRedCards })

            res.status(200).json(matchPlayerUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async deleteMatchById(req, res, next) {
        try {
            let { id } = req.params;
            let matchById = await MatchResult.findByPk(id);
            if(!matchById) {
                throw {name: 'Not found'};
            }
            await MatchResult.destroy({
                where: {id}
            });
            res.status(200).json({message: `Match with id ${matchById.id} success to delete`});
        } catch(error) {
            next(error);
        }
    }

    static async deleteMatchPlayerById(req, res, next) {
        try {
            let { id } = req.params;
            let matchPlayerById = await MatchPlayer.findByPk(id);
            if(!matchPlayerById) {
                throw {name: 'Not found'};
            }
            await MatchPlayer.destroy({
                where: {id}
            });
            res.status(200).json({message: `Match player with id ${matchPlayerById.id} success to delete`});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = MatchController;