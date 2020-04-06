'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('Favorites',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          productId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Products',
              key: 'id'
            },
            allowNull: false
          },
          userId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users',
              key: 'id'
            },
            allowNull: false
          },
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
        }
    )},
  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('Favorites')
    }
  };