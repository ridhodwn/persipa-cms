const { Event, sequelize } = require('../models');

class EventController {
    static async createEvent(req, res, next) {
        try {
            let { name, imgUrl, date, overview, gmapIframe, facilitiesInfo, facilitiesImgUrl1, facilitiesImgUrl2, organizerName, organizerPhone, organizerEmail, organizerWebsite, eventStartTime, eventBreakTime, eventEndTime, venueName, venueAddress, venueCountry } = req.body;
            let dateEvent = new Date(date);
            let eventCreated = await Event.create({name, imgUrl, date: dateEvent, overview, gmapIframe, facilitiesInfo, facilitiesImgUrl1, facilitiesImgUrl2, organizerName, organizerPhone, organizerEmail, organizerWebsite, eventStartTime, eventBreakTime, eventEndTime, venueName, venueAddress, venueCountry});
            res.status(201).json(eventCreated);
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

    static async updateEventById(req, res, next) {
        try {
            let { id } = req.params;
            let { name, imgUrl, date, overview, gmapIframe, facilitiesInfo, facilitiesImgUrl1, facilitiesImgUrl2, organizerName, organizerPhone, organizerEmail, organizerWebsite, eventStartTime, eventBreakTime, eventEndTime, venueName, venueAddress, venueCountry } = req.body;
            let dateEvent = new Date(date);
            let eventFound = await Event.findByPk(id);
            if(!eventFound) {
                throw {name: 'Not found'};
            }
            let eventUpdated = await eventFound.update({ name, imgUrl, date: dateEvent, overview, gmapIframe, facilitiesInfo, facilitiesImgUrl1, facilitiesImgUrl2, organizerName, organizerPhone, organizerEmail, organizerWebsite, eventStartTime, eventBreakTime, eventEndTime, venueName, venueAddress, venueCountry })

            res.status(200).json(eventUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async deleteEventById(req, res, next) {
        try {
            let { id } = req.params;
            let eventById = await Event.findByPk(id);
            if(!eventById) {
                throw {name: 'Not found'};
            }
            await Event.destroy({
                where: {id}
            });
            res.status(200).json({message: `${eventById.name} success to delete`});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = EventController;