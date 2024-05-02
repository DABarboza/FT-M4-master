const { Character, Episode } = require("../db");

const findAllCharacters = async (query) => {
  const characters = await Character.findAll({
    where: query,
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return characters;
};

module.exports = findAllCharacters;
