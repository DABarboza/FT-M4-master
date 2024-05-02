require("dotenv").config();

const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const { Sequelize } = require("sequelize");
const CharacterFunction = require("./models/Character");
const EpisodeFunction = require("./models/Episode");

const database = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
  { logging: false }
);

CharacterFunction(database);
EpisodeFunction(database);

const { Character, Episode } = database.models;

Character.belongsToMany(Episode, { through: "CharacterEpisode" });
Episode.belongsToMany(Character, { through: "CharacterEpisode" });

module.exports = {
  database,
  ...database.models,
};
