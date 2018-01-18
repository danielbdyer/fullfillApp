"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("comment_votes", {
        commentId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "comments",
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
          "comment_votes",
          ["userId", "commentId"],
          {
            type: "unique",
            name: "userCommentVoteId"
          }
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("comment_votes");
  }
};
