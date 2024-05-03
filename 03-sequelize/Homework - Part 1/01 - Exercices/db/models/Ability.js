const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ability",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      mana_cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 10.0,
          max: 250.0,
        },
      },
    },
    {
      unique: {
        compositeIndex: ["name", "mana_cost"],
      },
    }
  );
};
