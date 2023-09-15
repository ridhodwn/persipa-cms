const router = require('express').Router();

const GalleryController = require('../controllers/gallery-controller');

router.post("/", GalleryController.createGallery);
router.get("/", GalleryController.readGalleries);
router.get("/:id", GalleryController.readGalleryById);
router.put("/:id", GalleryController.updateGalleryById);
router.delete("/:id", GalleryController.deleteGalleryById);

module.exports = router;