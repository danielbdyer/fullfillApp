"use strict";
module.exports = (sequelize, DataTypes) => {
  var users_favtags = sequelize.define(
    "users_favtags",
    {
      userId: DataTypes.INTEGER,
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
  return users_favtags;
};

