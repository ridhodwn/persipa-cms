const router = require('express').Router();
const ManagementController = require('../controllers/management-controller');

router.post("/", ManagementController.createManagement);
router.get("/", ManagementController.readManagements);
router.get("/:id", ManagementController.readManagementById);
router.put("/:id", ManagementController.updateManagementById);
router.delete("/:id", ManagementController.deleteManagementById);

module.exports = router;