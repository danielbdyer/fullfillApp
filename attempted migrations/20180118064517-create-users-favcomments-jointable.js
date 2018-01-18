'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users_favcomments",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: "users",
            key: "id"
          },
          allowNull: false
        },
        tagId: {
          type: Sequelize.INTEGER,
          references: {
            model: "comments",
            key: "id"
          },
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }
  )},

down: (queryInterface, Sequelize) {
    return queryInterface.dropTable("users_favcomments")
  }
};
