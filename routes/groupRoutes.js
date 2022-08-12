const router = require("express").Router();
const controller = require("../controllers/groupController");

router.get("/", controller.getAllGroups);
router.get("/:group_id", controller.getGroup);
router.post("/:player_id/:/game_id", controller.createGroup);
router.put("/:group_id", controller.updateGroup);
router.delete("/:group_id", controller.deleteGroup);

module.exports = router;
