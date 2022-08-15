"use strict";

const { FOREIGNKEYS } = require("sequelize/types/query-types");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn("groups", "playerId", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("groups", "playerId");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
