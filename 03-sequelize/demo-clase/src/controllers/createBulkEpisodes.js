const { Episode } = require("../db");

const createBulkEpisodes = async (episodes) => {
  const newEpisodes = await Episode.bulkCreate(episodes);
  return episodes;
};

module.exports = createBulkEpisodes;
