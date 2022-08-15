const router = require("express").Router();
const controller = require("../controllers/playerController");

router.post("/register", controller.registerPlayer);
router.get("/", controller.getPlayers);
router.post("/login", controller.login);
router.delete('/:players_id', controller.deletePlayer)
router.put('/:players_id', controller.updatePlayer)
module.exports = router;
