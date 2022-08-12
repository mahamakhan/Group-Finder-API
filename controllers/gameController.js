const { Game } = require("../models");

const createGame = async (req, res) => {
  let gameCreator = await Game.create(req.body);
  res.send(gameCreator);
};

const findAllGames = async (req, res) => {
  let findGames = await Game.findAll();
  res.send(findGames);
};

module.exports = { createGame, findAllGames };
