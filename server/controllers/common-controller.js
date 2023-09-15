const { Player, PlayerActivity, Gallery, Event, MatchResult, MatchPlayer, News, NewsTag, Category, Tag, Comment, Management, sequelize } = require('../models');

class CommonController {
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

    static async readGalleries(req, res, next) {
        try {
            let galleries = await Gallery.findAll({
                order: sequelize.col('id')
            });
            res.status(200).json({galleries});
        } catch(error) {
            next(error);
        }
    }

    static async readGalleryById(req, res, next) {
        try {
            let { id } = req.params;
            let galleryById = await Gallery.findByPk(id);
            if(!galleryById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(galleryById);
        } catch(error) {
            next(error);
        }
    }

    static async readEvents(req, res, next) {
        try {
            let events = await Event.findAll({
                order: sequelize.col('id')
            });
            res.status(200).json({events});
        } catch(error) {
            next(error);
        }
    }

    static async readEventById(req, res, next) {
        try {
            let { id } = req.params;
            let eventById = await Event.findByPk(id);
            if(!eventById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(eventById);
        } catch(error) {
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

    static async readNews(req, res, next) {
        try {
            let news = await News.findAll({
                include: [{model: NewsTag, include: [Tag] }, Category, Comment],
                order: sequelize.col('id')
            });
            res.status(200).json({news});
        } catch(error) {
            next(error);
        }
    }

    static async readNewsById(req, res, next) {
        try {
            let { id } = req.params;
            let newsById = await News.findByPk(id, {
                include: [{model: NewsTag, include: [Tag] }, Category, Comment],
            });
            if(!newsById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(newsById);
        } catch(error) {
            next(error);
        }
    }

    static async readNewsTags(req, res, next) {
        try {
            let newsTags = await NewsTag.findAll({
                include: [News, Tag],
                order: sequelize.col('id')
            });
            res.status(200).json({newsTags});
        } catch(error) {
            next(error);
        }
    }

    static async readCategories(req, res, next) {
        try {
            let categories = await Category.findAll({
                include: [News],
                order: sequelize.col('id')
            });
            res.status(200).json({categories});
        } catch(error) {
            next(error);
        }
    }

    static async readTags(req, res, next) {
        try {
            let tags = await Tag.findAll({
                include: [{model: NewsTag, include: [News] }],
                order: sequelize.col('id')
            });
            res.status(200).json({tags});
        } catch(error) {
            next(error);
        }
    }

    static async createComment(req, res, next) {
        try {
            let { id } = req.params;
            let { commenter, commentText, commenterEmail, commenterWebsite } = req.body;
            let commenterImgUrl = 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg';
            let parentCommentId = -1;
            let date = new Date();
            let commentCreated = await Comment.create({newsId: id, commenter, commentText, commenterEmail, commenterWebsite, commenterImgUrl, parentCommentId, date});
            res.status(201).json(commentCreated);
        } catch(error) {
            next(error);
        }
    }

    static async readManagements(req, res, next) {
        try {
            let managements = await Management.findAll({
                order: sequelize.col('id')
            });
            res.status(200).json({managements});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = CommonController;