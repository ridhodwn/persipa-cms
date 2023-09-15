const { Tag, sequelize } = require('../models');

class TagController {
    static async createTag(req, res, next) {
        try {
            let { name } = req.body;
            let tagCreated = await Tag.create({name});
            res.status(201).json(tagCreated);
        } catch(error) {
            next(error);
        }
    }

    static async readTags(req, res, next) {
        try {
            let tags = await Tag.findAll({
                order: sequelize.col('id')
            });
            res.status(200).json({tags});
        } catch(error) {
            next(error);
        }
    }

    static async readTagById(req, res, next) {
        try {
            let { id } = req.params;
            let tagById = await Tag.findByPk(id);
            if(!tagById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(tagById);
        } catch(error) {
            next(error);
        }
    }

    static async updateTagById(req, res, next) {
        try {
            let { id } = req.params;
            let { name } = req.body;
            let tagFound = await Tag.findByPk(id);
            if(!tagFound) {
                throw {name: 'Not found'};
            }
            let tagUpdated = await tagFound.update({ name })

            res.status(200).json(tagUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async deleteTagById(req, res, next) {
        try {
            let { id } = req.params;
            let tagById = await Tag.findByPk(id);
            if(!tagById) {
                throw {name: 'Not found'};
            }
            await Tag.destroy({
                where: {id}
            });
            res.status(200).json({message: `${tagById.name} success to delete`});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = TagController;