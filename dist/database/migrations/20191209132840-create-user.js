'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
      },
      isVerified: {
        type: Sequelize.BOOLEAN
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      preferredlanguage: {
        type: Sequelize.STRING
      },
      preferredcurrency: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING(500)
      },
      role: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      authtype: {
        type: Sequelize.STRING
      },
      profileImage: {
        type: Sequelize.STRING
      },
      appNotification: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      emailNotification: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
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
  down: function down(queryInterface) {
    return queryInterface.dropTable('users');
  }
};