'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("posts_tags", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        postId: {
          allowNull: false,
          references: {
            model: "posts",
            key: "id"
          },
          type: Sequelize.INTEGER
        },
        tagId: {
          allowNull: false,
          references: {
            model: "tags",
            key: "id"
          },
          type: Sequelize.INTEGER
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
    },

down: (queryInterface, Sequelize) {
    return queryInterface.dropTable("posts_tags")
  }
};
