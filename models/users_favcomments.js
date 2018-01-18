"use strict";
module.exports = (sequelize, DataTypes) => {
  var users_favcomments = sequelize.define(
    "users_favcomments",
    {
      userId: DataTypes.INTEGER,
      commentId: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return users_favcomments;
};

