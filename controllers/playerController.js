const { Player } = require("../models");
const middleware = require("../middleware");

const getPlayers = async (req, res) => {
  let findPlayers = await Player.findAll();
  res.send(findPlayers);
};

const login = async (req, res) => {
  try {
    let player = await Player.findOne({
      where: { email: req.body.email },
      raw: true,
    });
    if (
      player &&
<<<<<<< HEAD
      (await middleware.comparePassword(
        player.passcode,
        req.body.password
      ))
=======
      (await middleware.comparePassword(player.passcode, req.body.password))
>>>>>>> main
    ) {
      let payload = {
        id: player.id,
        email: player.email,
      };
      let token = middleware.createToken(payload);
      return res.send({ player: payload, token });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    throw error;
  }
};

const registerPlayer = async (req, res) => {
<<<<<<< HEAD
  const { email, passcode, username, discord } = req.body
  let password = await middleware.hashPassword(passcode)
  let createPlayer = await Player.create({ email, password, username, discord });
=======
  const { email, password, username, discord } = req.body;
  let passcode = await middleware.hashPassword(password);
  let createPlayer = await Player.create({
    email,
    passcode,
    username,
    discord,
  });
>>>>>>> main
  res.send(createPlayer);
};

const updatePlayer = async (req, res) => {
  let player = await Player.update(req.body, {
    where: { id: req.params.players_id },
    returning: true,
  });
  res.send(player);
};

const deletePlayer = async (req, res) => {
  let player = await Player.destroy({ where: { id: req.params.players_id } });
  res.send(`player ${req.params.players_id} was deleted`);
};

module.exports = {
  getPlayers,
  login,
  registerPlayer,
  updatePlayer,
  deletePlayer,
};
