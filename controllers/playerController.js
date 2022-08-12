const { Player } = require("../models");

const getplayers = async (req, res) => {
  let findPlayers = await Player.FindAll();
  res.send(findPlayers);
};

const getplayer = async (req, res) => {
  let findPlayer = await Player.findByPk(req.params);
  res.send(findPlayer);
};

const registerPlayer = async (req, res) => {
  let createPlayer = await Player.create(req.params);
  res.send(createPlayer);
};
module.exports = { getplayers, getplayer, registerPlayer };
