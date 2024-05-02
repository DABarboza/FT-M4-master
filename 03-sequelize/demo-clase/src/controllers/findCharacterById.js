const { Character, Episode } = require("../db");

const findCharacterById = async (id) => {
  const character = await Character.findByPk(id, {
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (!character) {
    throw new Error("Character not found");
  }
  return character;
};

module.exports = findCharacterById;
