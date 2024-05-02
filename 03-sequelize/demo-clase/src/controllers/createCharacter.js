const { Character } = require("../db");

const createCharacter = async ({
  name,
  gender,
  status,
  origin,
  species,
  episodes,
}) => {
  const newCharacter = await Character.create({
    name,
    gender,
    status,
    origin,
    species,
  });

  newCharacter.addEpisodes(episodes);

  return newCharacter;
};

module.exports = createCharacter;
