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
      Group.belongsToMany(models.Player, {
        through: models.Unit,
        as: "groups",
        foreignKey: "groupId",
      });
      Group.belongsTo(models.Game, { foreignKey: "gameId" });
    }
  }
  Group.init(
    {
      date: DataTypes.DATE,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      groupSize: DataTypes.INTEGER,
      playerId: { type: DataTypes.INTEGER, allowNull: false },
      gameId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Group",
      tableName: "groups",
    }
  );
  return Group;
};
