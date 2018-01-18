"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("users_favposts", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      }),
      queryInterface.addColumn("users_favposts", "postId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "posts",
          key: "id"
        }
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("users_favposts", "userId"),
      queryInterface.removeColumn("users_favposts", "postId")
    ];
  }
};
