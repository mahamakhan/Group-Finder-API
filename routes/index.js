const router = require("express").Router();
const GameRouter = require("./gameRoutes");
const GroupRouter = require("./groupRoutes");
const PlayerRouter = require("./playerRoutes");

router.use("/game", GameRouter);
router.use("/group", GroupRouter);
router.use("/player", PlayerRouter);

module.exports = router;
