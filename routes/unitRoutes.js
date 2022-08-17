const router = require("express").Router();
const controller = require("../controllers/unitController");

router.get("/", controller.getAllUnits);
router.get("/:id", controller.getUnit);
router.get("/players/:player_id", controller.findByPlayer);
router.get("/groups/:group_id", controller.findByGroup);
router.post("/", controller.createUnit);
router.put("/:id", controller.updateUnit);
router.delete("/:id", controller.deleteUnit);

module.exports = router;
