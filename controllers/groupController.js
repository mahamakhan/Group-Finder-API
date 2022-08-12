const { Group } = require("../models");

const getAllGroups = async (req, res) => {
    const groups = await Group.findAll()
    res.send (groups)
 
};

const getGroup = async (req, res) => {
  
};
const createGroup = async (req, res) => {
 
};

const updateGroup = async (req, res) => {
  
};

const deleteGroup = async (req, res) => {
 
};



module.exports = { getAllGroups, getGroup, createGroup, updateGroup, deleteGroup};