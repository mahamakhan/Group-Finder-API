"use strict";

const { query } = require("express");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn("players", "password", "passcode");
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn("players", "passcode", "password");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
