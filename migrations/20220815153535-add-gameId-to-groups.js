'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     return queryInterface.addColumn('groups','gameId',{
      type: Sequelize.INTEGER
      }
    )
  },

  async down (queryInterface, Sequelize) {
  return queryInterface.removeColumn('groups','gameId')

  }
};
