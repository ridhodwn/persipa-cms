const router = require('express').Router();

const CategoryController = require('../controllers/category-controller');

router.post("/", CategoryController.createCategory);
router.get("/", CategoryController.readCategories);
router.get("/:id", CategoryController.readCategoryById);
router.put("/:id", CategoryController.updateCategoryById);
router.delete("/:id", CategoryController.deleteCategoryById);

module.exports = router;