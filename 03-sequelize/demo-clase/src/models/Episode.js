const database = require("../db");
const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Episode",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
