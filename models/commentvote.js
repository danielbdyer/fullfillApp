"use strict";
module.exports = (sequelize, DataTypes) => {
  var commentvote = sequelize.define(
    "commentvote",
    {
      vote: DataTypes.INTEGER
    },
    {}
  );

  // creating an association between comment and post
  commentvote.associate = function(models) {
    commentvote.belongsTo(models.comment, {
      as: "comment",
      foreignKey: "commentId",
      onDelete: "cascade"
    });
    commentvote.belongsTo(models.user, { as: "user", foreignKey: "userId" });
  };

  return commentvote;
};
