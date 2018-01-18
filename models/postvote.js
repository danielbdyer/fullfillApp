"use strict";
module.exports = (sequelize, DataTypes) => {
  var postvote = sequelize.define(
    "postvote",
    {
      vote: DataTypes.INTEGER
    },
    {}
  );

  // creating an association between comment and post
  postvote.associate = function(models) {
    postvote.belongsTo(models.post, {
      as: "post",
      foreignKey: "postId",
      onDelete: "cascade"
    });
    postvote.belongsTo(models.user, { as: "user", foreignKey: "userId" });
  };

  return postvote;
};
