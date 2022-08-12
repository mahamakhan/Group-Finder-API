const { Player } = require("../models");

const getPlayers = async (req, res) => {
  let findPlayers = await Player.findAll();
  res.send(findPlayers);
};

const getPlayer = async (req, res) => {
  let findPlayer = await Player.findByPk(req.params.players_id);
  res.send(findPlayer);
};

const registerPlayer = async (req, res) => {
  let createPlayer = await Player.create(req.body);
  res.send(createPlayer);
};


const updatePlayer = async (req, res) => {
  let player = await Player.update(req.body,{
    where: { id: req.params.players_id},
    returning: true,
  });
  res.send(player);
};

const deletePlayer = async (req, res) => {
  let player = await Player.destroy({ where: { id: req.params.players_id } });
  res.send(`player ${req.params.players_id} was deleted`);
};

module.exports = { getPlayers, getPlayer, registerPlayer, updatePlayer, deletePlayer};
