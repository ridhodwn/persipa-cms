const { News, NewsTag, Category, Tag, Comment, sequelize } = require('../models');

class NewsController {
    static async createNews(req, res, next) {
        const t = await sequelize.transaction();
        try {
            let { title, subtitle, snippet, views, date, content1, content2, content3, content4, imgUrl1, imgUrl2, vidUrl, quote, quotePerson, quotePersonPos, author, authorImgUrl, authorAbout, categoryId, NewsTags } = req.body;
            let dateEvent = new Date(date);
            let newsCreated = await News.create({title, subtitle, snippet, views, date: dateEvent, content1, content2, content3, content4, imgUrl1, imgUrl2, vidUrl, quote, quotePerson, quotePersonPos, author, authorImgUrl, authorAbout, categoryId });
            let newsTagCreated = await Promise.all(NewsTags.map((newsTag) => {
                let { tagId } = newsTag;
                NewsTag.create({ newsId: newsCreated.id, tagId });
            }), { transaction: t });
            
            await t.commit();  
            res.status(201).json(newsCreated);
        } catch(error) {
            await t.rollback();
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
            let newsById = await News.findByPk(id);
            if(!newsById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(newsById);
        } catch(error) {
            next(error);
        }
    }

    static async updateNewsById(req, res, next) {
        try {
            let { id } = req.params;
            let { title, subtitle, snippet, views, date, content1, content2, content3, content4, imgUrl1, imgUrl2, quote, quotePerson, quotePersonPos, author, authorImgUrl, authorAbout, categoryId } = req.body;
            let newsFound = await News.findByPk(id);
            if(!newsFound) {
                throw {name: 'Not found'};
            }
            let newsUpdated = await newsFound.update({ title, subtitle, snippet, views, date, content1, content2, content3, content4, imgUrl1, imgUrl2, quote, quotePerson, quotePersonPos, author, authorImgUrl, authorAbout, categoryId })

            res.status(200).json(newsUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async deleteNewsById(req, res, next) {
        try {
            let { id } = req.params;
            let newsById = await News.findByPk(id);
            if(!newsById) {
                throw {name: 'Not found'};
            }
            await News.destroy({
                where: {id}
            });
            res.status(200).json({message: `${newsById.title} success to delete`});
        } catch(error) {
            next(error);
        }
    }

    static async createNewsTag(req, res, next) {
        try {
            let { id } = req.params;
            let { tagId } = req.body;
            let newsTagCreated = await NewsTag.create({newsId: id, tagId});
            
            res.status(201).json(newsTagCreated);
        } catch(error) {
            next(error);
        }
    }

    static async deleteNewsTag(req, res, next) {
        try {
            let { id } = req.params;
            let newsTagById = await NewsTag.findByPk(id);
            if(!newsTagById) {
                throw {name: 'Not found'};
            }
            await NewsTag.destroy({
                where: {id}
            });
            res.status(200).json({message: `News tag ${newsTagById.id} success to delete`});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = NewsController;