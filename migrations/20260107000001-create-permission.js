'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.ENUM(
          'createUser', 'updateUser', 'deleteUser', 'viewUser', 'approveUser',
          'createEmployee', 'updateEmployee', 'approveEmployee',
          'createPayment', 'approvePayment', 'viewPayment',
          'requestWithdrawal', 'approveWithdrawal',
          'viewReports', 'manageRoles', 'accessSupport'
        ),
        allowNull: false,
        unique: true
      },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Permissions');
  }
};
