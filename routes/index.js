const router = require("express").Router();
const GameRouter = require("./gameRoutes");
const GroupRouter = require("./groupRoutes");
const PlayerRouter = require("./playerRoutes");

router.use("/games", GameRouter);
router.use("/groups", GroupRouter);
router.use("/players", PlayerRouter);

module.exports = router;
