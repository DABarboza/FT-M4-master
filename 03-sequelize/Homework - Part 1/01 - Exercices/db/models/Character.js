const { DataTypes, ENUM } = require("sequelize");
const { NOT } = require("sequelize/lib/deferrable");

const isNotHenry = (value) => {
  const code = value.toLowerCase();
  if (code === "henry") {
    throw new Error(
      'El código no puede ser "HENRY" en ninguna combinación de mayúsculas y minúsculas'
    );
  }
};

module.exports = (sequelize) => {
  sequelize.define(
    "Character",
    {
      code: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0, 5],
            msg: "El código debe tener un máximo de 5 caracteres",
          },
          isNotHenry: function (value) {
            isNotHenry(value);
          },
        },
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          NOT: {
            args: ["Henry", "SoyHenry", "Soy Henry"],
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
      },
      race: {
        type: DataTypes.STRING,
        ENUM: ["Human", "Elf", "Machine", "Demon", "Animal", "Other"],
        defaultValue: "Other",
      },
      hp: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      mana: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
