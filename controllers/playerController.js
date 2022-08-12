const { Player } = require("../models");

const getplayers = async (req, res) => {
  const findPlayers = await Player.FindAll();
  res.send(findPlayers);
};

const getplayer = async (req, res) => {
  const findPlayer = await Player.findByPk(req.params);
  res.send(findPlayer);
};

const registerPlayer = async (req, res) => {
  const createPlayer = await Player.create(req.params);
  res.send(createPlayer);
};
module.exports = { getplayer, getplayer, registerPlayer };
