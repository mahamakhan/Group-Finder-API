const { Player } = require("../models/players");



const getPlayers = async (req, res) => {
  let findPlayers = await Player.findAll();
  res.send(findPlayers);
};

const getplayer = async (req, res) => {
  let findPlayer = await Player.findByPk(req.params);
  res.send(findPlayer);
};

const registerPlayer = async (req, res) => {
  let createPlayer = await Player.create(req.body);
  res.send(createPlayer);
};
module.exports = { getPlayers, getplayer, registerPlayer };
