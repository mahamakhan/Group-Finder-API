const { Group } = require("../models");
const { Op, literal, fn, col } = require('sequelize')

const getAllGroups = async (req, res) => {
    const groups = await Group.findAll()
    res.send (groups)
 
};

const getGroup = async (req, res) => {
    const group = await Group.findByPk(req.params);
    res.send(group);
};
const createGroup = async (req, res) => {
    let group = await Group.create(req.body);
    res.send(group);
};

const updateGroup = async (req, res) => {
    let group = await Group.update(req.body, { where: { id: req.params } });
    res.send(group);
};

const deleteGroup = async (req, res) => {
    let group = await Group.destroy({ where: { id: req.params } });
};



module.exports = { getAllGroups, getGroup, createGroup, updateGroup, deleteGroup};