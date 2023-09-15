const router = require('express').Router();

const userRouter = require('./user-router');
const authentication = require('../middlewares/authentication');
const playerRouter = require('./player-router');
const managementRouter = require('./management-router');
const galleryRouter = require('./gallery-router');
const eventRouter = require('./event-router');
const matchRouter = require('./match-router');
const categoryRouter = require('./category-router');
const tagRouter = require('./tag-router');
const newsRouter = require('./news-router');
const commonRouter = require('./common-router');
const adminRouter = require('./admin-router');

router.use("/users", userRouter);
router.use("/commons", commonRouter);

router.use(authentication);

router.use("/players", playerRouter);
router.use("/managements", managementRouter);
router.use("/galleries", galleryRouter);
router.use("/events", eventRouter);
router.use("/matches", matchRouter);
router.use("/categories", categoryRouter);
router.use("/tags", tagRouter);
router.use("/news", newsRouter);
router.use("/admins", adminRouter);

module.exports = router;