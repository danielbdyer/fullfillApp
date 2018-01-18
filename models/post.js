"use strict";
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define(
    "post",
    {
      isInternal: DataTypes.BOOLEAN,
      postBody: DataTypes.JSONB,
      postUrl: DataTypes.STRING
    },
    {}
  );

  // creating an association between comment and post
  post.associate = function(models) {
    post.belongsTo(models.user, { as: "user", foreignKey: "userId" });
    post.belongsToMany(models.tag, {
      through: "posts_tags",
      as: "tags",
      foreignKey: "postId"
    });
  };

  return post;
};
