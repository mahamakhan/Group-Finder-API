const { Game } = require("../models");

const createGame = async (req, res) => {
  let gameCreator = await Game.create(req.body);
  res.send(gameCreator);
};

const findAllGames = async (req, res) => {
  let findGames = await Game.findAll();
  res.send(findGames);
};

const findGame = async (req, res) => {
  let findGame = await Game.findByPk(req.params);
  res.send(findGame);
};

const updateGame = async (req, res) => {
  let gameUpdater = await Game.update(req.body, { where: { id: req.params } });
  res.send(gameUpdater);
};

const deleteGame = async (req, res) => {
  let gameDeleter = await Game.destroy({ where: { id: req.params } });
};

module.exports = { createGame, findAllGames, findGame, updateGame, deleteGame };
