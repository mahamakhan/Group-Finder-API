const { Unit, Player, Group } = require("../models");

const getAllUnits = async (req, res) => {
  let playerGroups = await Unit.findAll();
  res.send(playerGroups);
};

const getUnit = async (req, res) => {
  let playerGroup = await Unit.findByPk(req.params.id);
  res.send(playerGroup);
};

const createUnit = async (req, res) => {
  let playerGroup = await Unit.create(req.body);
  res.send(playerGroup);
};

const updateUnit = async (req, res) => {
  let playerGroup = await Unit.update(
    { ...req.body },
    { where: { id: req.params.id }, returning: true }
  );
  res.send(playerGroup);
};

const deleteUnit = async (req, res) => {
  let playerGroup = await Unit.destroy({
    where: [
      { groupId: req.params.group_id },
      { playerId: req.params.player_id },
    ],
  });
  res.send({ msg: "Commented Deleted" });
};

const findByPlayer = async (req, res) => {
  let player = req.params.player_id;
  let playerGroup = await Unit.findAll({
    where: { playerId: player },
  });
  res.send(playerGroup);
};

const findByGroup = async (req, res) => {
  let group = req.params.group_id;
  let PlayerGroup = await Unit.findAll({
    where: { groupId: group },
  });
  res.send(PlayerGroup);
};

module.exports = {
  getAllUnits,
  getUnit,
  createUnit,
  updateUnit,
  deleteUnit,
  findByPlayer,
  findByGroup,
};
