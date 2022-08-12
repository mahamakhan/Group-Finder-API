const router = require("express").Router();
const controller = require("../controllers/playerController");

router.post("/", controller.registerPlayer);
router.get("/", controller.getPlayers);
router.get("/:players_id", controller.getPlayer);

module.exports = router;
