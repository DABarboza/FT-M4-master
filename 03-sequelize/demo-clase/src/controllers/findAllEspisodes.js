const { Episode } = require("../db");
const findAllEspisodes = async (req, res) => {
  const episodes = await Episode.findAll();
  return episodes;
};

module.exports = findAllEspisodes;
