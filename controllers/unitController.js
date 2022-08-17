const { Unit, Player, Group } = require("../models");

const getAllPlayerGroups = async (req, res) => {
  let playerGroups = await Unit.findAll();
  res.send(playerGroups);
};

const getPlayerGroup = async (req, res) => {
  let playerGroup = await Unit.findByPk(req.params.player_groups_id);
  res.send(playerGroup);
};

const createPlayerGroup = async (req, res) => {
  let playerGroup = await Unit.create(req.body);
  res.send(playerGroup);
};

const updatePlayerGroup = async (req, res) => {
  let playerGroup = await Unit.update(
    { ...req.body },
    { where: { id: req.params.id }, returning: true }
  );
  res.send(playerGroup);
};

const deletePlayerGroup = async (req, res) => {
  let playerGroup = await Unit.destroy({
    where: { id: req.params.id },
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
  getAllPlayerGroups,
  getPlayerGroup,
  createPlayerGroup,
  updatePlayerGroup,
  deletePlayerGroup,
  findByPlayer,
  findByGroup,
};
