"use strict";
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define(
    "comment",
    {
      commentBody: DataTypes.STRING
    },
    {}
  );

  // creating an association between comment and post
  comment.associate = function(models) {
    comment.belongsTo(models.post, {
      as: "post",
      foreignKey: "postId",
      onDelete: "cascade"
    });
    comment.belongsTo(models.user, { as: "user", foreignKey: "userId" });
    comment.belongsToMany(models.user, {
      through: "users_favcomments",
      as: "favcomments",
      foreignKey: "commentId"
    });
  };

  return comment;
};
