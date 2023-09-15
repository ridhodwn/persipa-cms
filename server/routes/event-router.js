const router = require('express').Router();

const EventController = require('../controllers/event-controller');

router.post("/", EventController.createEvent);
router.get("/", EventController.readEvents);
router.get("/:id", EventController.readEventById);
router.put("/:id", EventController.updateEventById);
router.delete("/:id", EventController.deleteEventById);

module.exports = router;