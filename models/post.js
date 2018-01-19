"use strict";
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define(
    "post",
    {
      isInternal: DataTypes.BOOLEAN,
      postTitle: DataTypes.STRING,
      postSubheader: DataTypes.STRING,
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
    post.belongsToMany(models.user, {
      through: "users_favposts",
      as: "favposts",
      foreignKey: "postId"
    });
  };

  return post;
};
