const router = require('express').Router();

const PlayerController = require('../controllers/player-controller');

router.post("/", PlayerController.createPlayer);
router.get("/", PlayerController.readPlayers);
router.post("/activities/:id", PlayerController.createPlayerActivity);
router.get("/activities/:id", PlayerController.readPlayerActivityById);
router.put("/activities/:id", PlayerController.updatePlayerActivityById);
router.delete("/activities/:id", PlayerController.deletePlayerActivityById);
router.get("/:id", PlayerController.readPlayerById);
router.put("/:id", PlayerController.updatePlayerById);
router.delete("/:id", PlayerController.deletePlayerById);

module.exports = router;