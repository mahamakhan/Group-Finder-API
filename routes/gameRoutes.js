const router = require("express").Router();
const controller = require("../controllers/gameController");

router.post("/", controller.createGame);
router.get("/", controller.findAllGames);

module.exports = router;
