"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("posts_tags", "postId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "posts",
          key: "id"
        }
      }),
      queryInterface.addColumn("posts_tags", "tagId", {
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
      queryInterface.removeColumn("posts_tags", "postId"),
      queryInterface.removeColumn("posts_tags", "tagId")
    ];
  }
};
