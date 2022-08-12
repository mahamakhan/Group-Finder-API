const router = require("express").Router();
const gameRouter = require("./gameRoutes");
const groupRouter = require("./groupRoutes");
const playerRouter = require("./playerRoutes");

router.use("/game", gameRouter);
router.use("/group", groupRouter);
router.use("./player", playerRouter);
module.exports = router;
