"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("users_favtags", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      }),
      queryInterface.addColumn("users_favtags", "tagId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tags",
          key: "id"
        }
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("users_favtags", "userId"),
      queryInterface.removeColumn("users_favtags", "tagId")
    ];
  }
};
