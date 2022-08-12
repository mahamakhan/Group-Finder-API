'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Players extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Players.belongsTo(models.Group, { foreignKey: 'groupId' })
    }
  }
  Players.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    discord: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
    tableName: "players"
  });
  return Players;
};