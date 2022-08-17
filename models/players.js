"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsToMany(models.Group, {
        as: "players",
        through: models.Unit,
        foreignKey: "playerId",
      });
    }
  }
  Player.init(
    {
      username: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      discord: DataTypes.STRING,
      passcode: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Player",
      tableName: "players",
    }
  );
  return Player;
};
