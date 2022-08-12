const router = require("express").Router();
const controller = require("../controllers/playerController");

router.post("/", controller.registerPlayer);
router.get("/", controller.getPlayers);
router.get("/:players_id", controller.getPlayer);
router.delete('/:players_id', controller.deletePlayer)
router.put('/:players_id', controller.updatePlayer)
module.exports = router;
