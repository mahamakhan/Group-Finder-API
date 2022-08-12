'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group.hasMany(models.Players, { foreignKey: 'playerId', as: 'player'})
      Group.hasOne(models.Game, { foreignKey: 'gameId',  })
    }
  }
  Group.init({
    date: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    groupSize: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};