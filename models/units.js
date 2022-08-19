"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { }
  }
  Unit.init(
    {
      playerId: { type: DataTypes.INTEGER, allowNull: false },
      groupId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Unit",
      tableName: "units",
    }
  );
  return Unit;
};
