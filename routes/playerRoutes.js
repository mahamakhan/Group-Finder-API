const router = require("express").Router();
const controller = require("../controllers/playerController");
const middleware = require("../middleware");

router.post("/register", controller.registerPlayer);
router.get("/", controller.getPlayers);
router.post("/login", controller.login);
router.delete("/:players_id", controller.deletePlayer);
router.put(
  "/:players_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.updatePlayer
);
router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
);

module.exports = router;
