"use strict";
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define(
    "tag",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING
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
  };

  return comment;
};

