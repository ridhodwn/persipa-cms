const router = require('express').Router();

const CommonController = require('../controllers/common-controller');

router.get("/players", CommonController.readPlayers);
router.get("/players/:id", CommonController.readPlayerById);
router.get("/galleries", CommonController.readGalleries);
router.get("/galleries/:id", CommonController.readGalleryById);
router.get("/events", CommonController.readEvents);
router.get("/events/:id", CommonController.readEventById);
router.get("/matches", CommonController.readMatches);
router.get("/matches/:id", CommonController.readMatchById);
router.get("/news", CommonController.readNews);
router.get("/news/:id", CommonController.readNewsById);
router.get("/news-tags", CommonController.readNewsTags);
router.get("/categories", CommonController.readCategories);
router.get("/tags", CommonController.readTags);
router.post("/comments/:id", CommonController.createComment);
router.get("/managements", CommonController.readManagements);

module.exports = router;