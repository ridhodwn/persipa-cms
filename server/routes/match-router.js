const router = require('express').Router();

const MatchController = require('../controllers/match-controller');

router.post("/", MatchController.createMatch);
router.get("/", MatchController.readMatches);
router.post("/players/:id", MatchController.createMatchPlayer);
router.get("/players/:id", MatchController.readMatchPlayerById);
router.put("/players/:id", MatchController.updateMatchPlayerById);
router.delete("/players/:id", MatchController.deleteMatchPlayerById);
router.get("/:id", MatchController.readMatchById);
router.put("/:id", MatchController.updateMatchById);
router.delete("/:id", MatchController.deleteMatchById);

module.exports = router;