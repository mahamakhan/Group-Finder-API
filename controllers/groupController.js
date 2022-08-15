const { Group, Game, Player } = require("../models/");
const { Op, literal, fn, col } = require('sequelize')

const getAllGroups = async (req, res) => {
    const groups = await Group.findAll({where: {playerId: req.param.players_id},
    include:[{model: Game, as :'games'}]})
    res.send (groups)
 
};

const getGroup = async (req, res) => {
    const group = await Group.findByPk(req.params);
    res.send(group);
};
const createGroup = async (req, res) => {
    let group = await Group.create({...req.body, 
        gameId:req.query.game,
        playersId: req.query.player
    });
    res.send(group);
};

const updateGroup = async (req, res) => {
    let group = await Group.update({...req.body}, { where: { id: req.params.group_id }, returning: true });
    res.send(group);
};

const deleteGroup = async (req, res) => {
    let group = await Group.destroy({ where: { id: req.params.group_id } })
    res.send({ msg: 'Commented Deleted'});
};



module.exports = { getAllGroups, getGroup, createGroup, updateGroup, deleteGroup};