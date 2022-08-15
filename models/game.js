"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsToMany(models.Player, { foreignKey: "gameId", through: models.Group });
    }
  }
  Game.init(
    {
      gameName: DataTypes.STRING,
      image: DataTypes.STRING,
      platform: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Game",
      tableName: "games",
    }
  );
  return Game;
};
