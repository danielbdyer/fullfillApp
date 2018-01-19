"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id: "1",
          username: "dannydyer",
          email: "danielbdyer@gmail.com",
          imageURL: "",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "2",
          username: "nydiasegura",
          email: "nydiasegura@hotmail.com",
          imageURL: "",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.bulkDelete("users", null, {});
  }
};
