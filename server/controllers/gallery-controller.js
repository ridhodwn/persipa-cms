const { Gallery, sequelize } = require('../models');

class GalleryController {
    static async createGallery(req, res, next) {
        try {
            let { eventName, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6 } = req.body;
            let galleryCreated = await Gallery.create({eventName, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6});
            res.status(201).json(galleryCreated);
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

    static async updateGalleryById(req, res, next) {
        try {
            let { id } = req.params;
            let { eventName, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6 } = req.body;
            let galleryFound = await Gallery.findByPk(id);
            if(!galleryFound) {
                throw {name: 'Not found'};
            }
            let galleryUpdated = await galleryFound.update({ eventName, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6 })

            res.status(200).json(galleryUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async deleteGalleryById(req, res, next) {
        try {
            let { id } = req.params;
            let galleryById = await Gallery.findByPk(id);
            if(!galleryById) {
                throw {name: 'Not found'};
            }
            await Gallery.destroy({
                where: {id}
            });
            res.status(200).json({message: `${galleryById.eventName} success to delete`});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = GalleryController;