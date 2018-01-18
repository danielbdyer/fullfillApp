"use strict";
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define(
    "user",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      imageURL: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );

  user.associate = function(models) {
    user.belongsToMany(models.tag, {
      through: "users_favtags",
      as: "favtags",
      foreignKey: "userId"
    });
    user.belongsToMany(posts.tag, {
      through: "users_favposts",
      as: "favposts",
      foreignKey: "userId"
    });
    user.belongsToMany(models.tag, {
      through: "users_favcomments",
      as: "favcomments",
      foreignKey: "userId"
    });
  };

  return user;
};
