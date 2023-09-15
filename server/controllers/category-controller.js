const { Category, sequelize } = require('../models');

class CategoryController {
    static async createCategory(req, res, next) {
        try {
            let { name } = req.body;
            let categoryCreated = await Category.create({name});
            res.status(201).json(categoryCreated);
        } catch(error) {
            next(error);
        }
    }

    static async readCategories(req, res, next) {
        try {
            let categories = await Category.findAll({
                order: sequelize.col('id')
            });
            res.status(200).json({categories});
        } catch(error) {
            next(error);
        }
    }

    static async readCategoryById(req, res, next) {
        try {
            let { id } = req.params;
            let categoryById = await Category.findByPk(id);
            if(!categoryById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(categoryById);
        } catch(error) {
            next(error);
        }
    }

    static async updateCategoryById(req, res, next) {
        try {
            let { id } = req.params;
            let { name } = req.body;
            let categoryFound = await Category.findByPk(id);
            if(!categoryFound) {
                throw {name: 'Not found'};
            }
            let categoryUpdated = await categoryFound.update({ name })

            res.status(200).json(categoryUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async deleteCategoryById(req, res, next) {
        try {
            let { id } = req.params;
            let categoryById = await Category.findByPk(id);
            if(!categoryById) {
                throw {name: 'Not found'};
            }
            await Category.destroy({
                where: {id}
            });
            res.status(200).json({message: `${categoryById.name} success to delete`});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = CategoryController;