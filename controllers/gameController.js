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
  gameId = req.params.id;
  let findGame = await Game.findByPk(gameId);
  res.send(findGame);
};

const gameImage = async (req, res) => {
  let findGameImage = await Game.findOne({
    attributes: ["image"],
    where: { id: req.params.id },
  });
  res.send(findGameImage);
};

const updateGame = async (req, res) => {
  let gameUpdater = await Game.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.send(gameUpdater);
};

const deleteGame = async (req, res) => {
  let gameDeleter = await Game.destroy({ where: { id: req.params.id } });
  res.send(`game with id of ${req.params.id} was deleted`);
};

module.exports = {
  createGame,
  findAllGames,
  findGame,
  gameImage,
  updateGame,
  deleteGame,
};
