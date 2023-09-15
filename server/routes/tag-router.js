const router = require('express').Router();

const TagController = require('../controllers/tag-controller');

router.post("/", TagController.createTag);
router.get("/", TagController.readTags);
router.get("/:id", TagController.readTagById);
router.put("/:id", TagController.updateTagById);
router.delete("/:id", TagController.deleteTagById);

module.exports = router;