const { Group, Game, Player } = require("../models/");

const getAllGroups = async (req, res) => {
  const groups = await Group.findAll();
  res.send(groups);
};

const getGroup = async (req, res) => {
  const group = await Group.findByPk(req.params.group_id);
  res.send(group);
};
const createGroup = async (req, res) => {
  let gameId = req.params.game_id;
  let playerId = req.params.player_id;
  let group = await Group.create({
    ...req.body,
    gameId,
    playersId,
  });
  res.send(group);
};

const updateGroup = async (req, res) => {
  let group = await Group.update(
    { ...req.body },
    { where: { id: req.params.group_id }, returning: true }
  );
  res.send(group);
};

const deleteGroup = async (req, res) => {
  let group = await Group.destroy({ where: { id: req.params.group_id } });
  res.send({ msg: "Commented Deleted" });
};

module.exports = {
  getAllGroups,
  getGroup,
  createGroup,
  updateGroup,
  deleteGroup,
};
