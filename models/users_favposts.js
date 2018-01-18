"use strict";
module.exports = (sequelize, DataTypes) => {
  var users_favposts = sequelize.define(
    "users_favposts",
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return users_favposts;
};
