"use strict";
module.exports = (sequelize, DataTypes) => {
  var posts_tags = sequelize.define(
    "posts_tags",
    {
      postId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return posts_tags;
};
