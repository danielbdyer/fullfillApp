"use strict";
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define(
    "tag",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      uri: DataTypes.STRING
    },
    {}
  );

  // creating an association between comment and post
  tag.associate = function(models) {
    tag.belongsToMany(models.post, {
      through: "posts_tags",
      as: "posts",
      foreignKey: "tagId"
    });
    tag.belongsToMany(models.user, {
      through: "users_favtags",
      as: "favtags",
      foreignKey: "tagId"
    });
  };

  return tag;
};
