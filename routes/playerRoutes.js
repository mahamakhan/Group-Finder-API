const router = require("express").Router();
const controller = require("../controllers/playerController");

router.get("/", controller.getPlayers);

router.get("/:id", controller.getPlayer);
router.post("/:id", controller.registerPlayer);


module.exports = router;
