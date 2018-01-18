"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("post_votes", {
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "posts",
            key: "id"
          }
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id"
          }
        },
        vote: {
          type: Sequelize.INTEGER
        },
        recordedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
      .then(function() {
        return queryInterface.addConstraint(
          "post_votes",
          ["userId", "postId"],
          {
            type: "unique",
            name: "userPostVoteId"
          }
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("post_votes");
  }
};
