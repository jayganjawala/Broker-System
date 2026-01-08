'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Employees', 'notes', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    });

    await queryInterface.changeColumn('Employees', 'address', {
      type: Sequelize.STRING,
      allowNull: true  // Change this to your desired modification
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Employees', 'address', {
      type: Sequelize.STRING,
      allowNull: false  // Revert to original state
    });

    await queryInterface.removeColumn('Employees', 'notes');
  }
};