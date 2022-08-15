"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group.belongsTo(models.Player, {
        foreignKey: "playerId",
        as: "player",
      });
      Group.belongsTo(models.Game, { foreignKey: "gameId", as: "game" });
    }
  }
  Group.init(
    {
      date: DataTypes.DATE,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      groupSize: DataTypes.INTEGER,
      playerId: { type: DataTypes.INTEGER, allowNull: false },
      businessId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Group",
      tableName: "groups",
    }
  );
  return Group;
};
