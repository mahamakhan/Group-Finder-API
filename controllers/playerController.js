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
      middleware.comparePassword(player.passcode, req.body.password)
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
  const { email, password, username, discord } = req.body;
  let passcode = await middleware.hashPassword(password);
  let createPlayer = await Player.create({
    email,
    passcode,
    username,
    discord,
  });

  res.send(createPlayer);
};

const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const player = await Player.findByPk(req.params.players_id);
    if (
      player &&
      (await middleware.comparePassword(
        player.dataValues.passcode,
        oldPassword
      ))
    ) {
      let passcode = await middleware.hashPassword(newPassword);
      await player.update({ passcode });
      return res.send({ status: "Ok", payload: player });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {}
};

const deletePlayer = async (req, res) => {
  let player = await Player.destroy({ where: { id: req.params.players_id } });
  res.send(`player ${req.params.players_id} was deleted`);
};

module.exports = {
  getPlayers,
  login,
  registerPlayer,
  updatePassword,
  deletePlayer,
};
