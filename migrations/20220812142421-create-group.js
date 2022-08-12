'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      groupSize: {
        type: Sequelize.INTEGER
      },
      gameId:{
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'game',
          key:'id'
        }},
        playerId:{
          type: Sequelize.INTEGER,
          onDelete:'CASCADE',
          references:{
            model:'players',
            key:'id'
          }},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('groups');
  }
};