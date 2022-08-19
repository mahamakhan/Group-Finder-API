const router = require("express").Router();
const controller = require("../controllers/gameController");

router.post("/", controller.createGame);
router.get("/", controller.findAllGames);
router.get("/:id", controller.findGame);
router.get("/image/:id", controller.gameImage);
router.put("/:id", controller.updateGame);
router.delete("/:id", controller.deleteGame);

module.exports = router;
