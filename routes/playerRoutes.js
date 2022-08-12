const router = require("express").Router();
const controller = require("../controllers/playerController");

router.get("/", controller.getplayers);
router.get("/:id", controller.getplayer);
router.post("/:id", controller.registerPlayer);

module.exports = router;
