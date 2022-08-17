const router = require("express").Router();
const GameRouter = require("./gameRoutes");
const GroupRouter = require("./groupRoutes");
const PlayerRouter = require("./playerRoutes");
const Player_GroupRouter = require("./unitRoutes");

router.use("/games", GameRouter);
router.use("/groups", GroupRouter);
router.use("/players", PlayerRouter);
router.use("/pgs", Player_GroupRouter);

module.exports = router;
