const router = require('express').Router();

const NewsController = require('../controllers/news-controller');

router.post("/", NewsController.createNews);
router.get("/", NewsController.readNews);
router.post("/tags/:id", NewsController.createNewsTag);
router.delete("/tags/:id", NewsController.deleteNewsTag);
router.get("/:id", NewsController.readNewsById);
router.put("/:id", NewsController.updateNewsById);
router.delete("/:id", NewsController.deleteNewsById);

module.exports = router;