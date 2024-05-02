const { Episode } = require("../db");

const createEpisode = async (name) => {
  const newEpisode = await Episode.create({ name });
  return newEpisode;
};

module.exports = createEpisode;
