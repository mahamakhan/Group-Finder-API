const router = require("express").Router();
const controller = require("../controllers/playerController");
const middleware = require("../middleware");

router.post("/register", controller.registerPlayer);
router.get("/", controller.getPlayers);
router.get("/name/:player_id", controller.playerName);
router.post("/login", controller.login);
router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
);
router.delete(
  "/:players_id",
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.deletePlayer
);
router.put(
  "/:players_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.updatePassword
);

module.exports = router;
