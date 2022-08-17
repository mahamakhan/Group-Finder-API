const router = require("express").Router();
const controller = require("../controllers/unitController");

router.get("/", controller.getAllPlayerGroups);
router.get("/:id", controller.getPlayerGroup);
router.get("/players/:player_id", controller.findByPlayer);
router.get("/groups/:group_id", controller.findByGroup);

router.post("/", controller.createPlayerGroup);

router.put("/:id", controller.updatePlayerGroup);

router.delete("/:id", controller.deletePlayerGroup);

module.exports = router;
