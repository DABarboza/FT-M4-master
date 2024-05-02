const { Character } = require("../db");

const deleteCharacter = async (id) => {
  const character = await Character.findByPk(id);
  await character.destroy();
  return character;
};

module.exports = deleteCharacter;
