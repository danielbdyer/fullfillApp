"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      },
      isInternal: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      postTitle: {
        type: Sequelize.STRING
      },
      postSubheader: {
        type: Sequelize.STRING
      },
      postBody: {
        type: Sequelize.JSONB
      },
      postUrl: {
        type: Sequelize.STRING,
        validate: {
          isUrl: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("posts");
  }
};
