const { Player, PlayerActivity, sequelize } = require('../models');

class PlayerController {
    static async createPlayer(req, res, next) {
        const t = await sequelize.transaction();
        try {
            let { name, age, number, about, nationality, position, height, weight, currentTeam, gamesPlayed, flagUrl, imgUrl, PlayerActivities } = req.body;
            let playerCreated = await Player.create({name, age, number, about, nationality, position, height, weight, currentTeam, gamesPlayed, flagUrl, imgUrl});
            let playerActivityCreated = await Promise.all(PlayerActivities.map((playerActivity) => {
                let { season, club, goals, assists, yellowCards, redCards, appearances, winRatio, drawRatio, lossRatio, ownGoals } = playerActivity;
                PlayerActivity.create({ playerId: playerCreated.id, season, club, goals, assists, yellowCards, redCards, appearances, winRatio, drawRatio, lossRatio, ownGoals });
            }), { transaction: t });
            
            await t.commit();
            res.status(201).json(playerCreated);
        } catch(error) {
            await t.rollback();
            next(error);
        }
    }

    static async readPlayers(req, res, next) {
        try {
            let players = await Player.findAll({
                include: [PlayerActivity],
                order: sequelize.col('id')
            });
            res.status(200).json({players});
        } catch(error) {
            next(error);
        }
    }

    static async readPlayerById(req, res, next) {
        try {
            let { id } = req.params;
            let playerById = await Player.findByPk(id, {
                include: [PlayerActivity]
            });
            if(!playerById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(playerById);
        } catch(error) {
            next(error);
        }
    }

    static async updatePlayerById(req, res, next) {
        try {
            let { id } = req.params;
            let { name, age, number, about, nationality, position, height, weight, currentTeam, gamesPlayed, flagUrl, imgUrl } = req.body;
            let playerFound = await Player.findByPk(id);
            if(!playerFound) {
                throw {name: 'Not found'};
            }
            let playerUpdated = await playerFound.update({ name, age, number, about, nationality, position, height, weight, currentTeam, gamesPlayed, flagUrl, imgUrl })

            res.status(200).json(playerUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async readPlayerActivityById(req, res, next) {
        try {
            let { id } = req.params;
            let playerActById = await PlayerActivity.findByPk(id);
            if(!playerActById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(playerActById);
        } catch(error) {
            next(error);
        }
    }

    static async createPlayerActivity(req, res, next) {
        try {
            let { id } = req.params;
            let { season, club, goals, assists, yellowCards, redCards, appearances, winRatio, drawRatio, lossRatio, ownGoals } = req.body;
            let playerActivityCreated = await PlayerActivity.create({playerId: id, season, club, goals, assists, yellowCards, redCards, appearances, winRatio, drawRatio, lossRatio, ownGoals});
            
            res.status(201).json(playerActivityCreated);
        } catch(error) {
            next(error);
        }
    }

    static async updatePlayerActivityById(req, res, next) {
        try {
            let { id } = req.params;
            let { season, club, goals, assists, yellowCards, redCards, appearances, winRatio, drawRatio, lossRatio, ownGoals } = req.body;
            let playerActivityFound = await PlayerActivity.findByPk(id);
            if(!playerActivityFound) {
                throw {name: 'Not found'};
            }
            let playerActivityUpdated = await playerActivityFound.update({ season, club, goals, assists, yellowCards, redCards, appearances, winRatio, drawRatio, lossRatio, ownGoals })

            res.status(200).json(playerActivityUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async deletePlayerById(req, res, next) {
        try {
            let { id } = req.params;
            let playerById = await Player.findByPk(id);
            if(!playerById) {
                throw {name: 'Not found'};
            }
            await Player.destroy({
                where: {id}
            });
            res.status(200).json({message: `${playerById.name} success to delete`});
        } catch(error) {
            next(error);
        }
    }

    static async deletePlayerActivityById(req, res, next) {
        try {
            let { id } = req.params;
            let playerActById = await PlayerActivity.findByPk(id);
            if(!playerActById) {
                throw {name: 'Not found'};
            }
            await PlayerActivity.destroy({
                where: {id}
            });
            res.status(200).json({message: `Activity ${playerActById.id} success to delete`});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = PlayerController;