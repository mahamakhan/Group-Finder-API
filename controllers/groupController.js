const { Group, Game, Player } = require("../models/");

const getAllGroups = async (req, res) => {
  let groups = await Group.findAll();
  res.send(groups);
};

const getGroup = async (req, res) => {
  let group = await Group.findByPk(req.params.group_id);
  res.send(group);
};

const createGroup = async (req, res) => {
  let group = await Group.create(req.body);
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

const findByPlayer = async (req, res) => {
  let player = req.params.player_id;
  let group = await Group.findAll({ where: { playerId: player } });
  res.send(group);
};

const findByGame = async (req, res) => {
  let game = req.params.game_id;
  let group = await Group.findAll({ where: { gameId: game } });
  res.send(group);
};

module.exports = {
  getAllGroups,
  getGroup,
  createGroup,
  updateGroup,
  deleteGroup,
  findByPlayer,
  findByGame,
};
