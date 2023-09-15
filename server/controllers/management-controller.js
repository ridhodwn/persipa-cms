const { Management, sequelize } = require('../models');

class ManagementController {
    static async createManagement(req, res, next) {
        try {
            let { name, position, imageUrl, nationality, flagUrl, currentTeam, pastTeam, age } = req.body;
            let managementCreated = await Management.create({name, position, imageUrl, nationality, flagUrl, currentTeam, pastTeam, age});
            res.status(201).json(managementCreated);
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

    static async readManagementById(req, res, next) {
        try {
            let { id } = req.params;
            let managementById = await Management.findByPk(id);
            if(!managementById) {
                throw {name: 'Not found'};
            }
            res.status(200).json(managementById);
        } catch(error) {
            next(error);
        }
    }

    static async updateManagementById(req, res, next) {
        try {
            let { id } = req.params;
            let { name, position, imageUrl, nationality, flagUrl, currentTeam, pastTeam, age } = req.body;
            let managementFound = await Management.findByPk(id);
            if(!managementFound) {
                throw {name: 'Not found'};
            }
            let managementUpdated = await managementFound.update({ name, position, imageUrl, nationality, flagUrl, currentTeam, pastTeam, age })

            res.status(200).json(managementUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async deleteManagementById(req, res, next) {
        try {
            let { id } = req.params;
            let managementById = await Management.findByPk(id);
            if(!managementById) {
                throw {name: 'Not found'};
            }
            await Management.destroy({
                where: {id}
            });
            res.status(200).json({message: `${managementById.name} success to delete`});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = ManagementController;