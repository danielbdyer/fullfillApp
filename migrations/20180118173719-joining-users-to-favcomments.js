"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("users_favcomments", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      }),
      queryInterface.addColumn("users_favcomments", "commentId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "comments",
          key: "id"
        }
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("users_favcomments", "userId"),
      queryInterface.removeColumn("users_favcomments", "commentId")
    ];
  }
};
