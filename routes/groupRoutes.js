const router = require("express").Router();
const controller = require("../controllers/groupController");

router.get("/", controller.getAllGroups);
router.get("/:group_id", controller.getGroup);
router.get("/players/:player_id", controller.findByPlayer);
router.get("/games/:game_id", controller.findByGame);
router.get("/players/names/:group_id", controller.groupies);
router.post("/", controller.createGroup);
router.put("/:group_id", controller.updateGroup);
router.delete("/:group_id", controller.deleteGroup);

module.exports = router;
