/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = "SELECT * FROM movies WHERE duration < 90;";

const ejercicio03 =
  "SELECT * FROM movies WHERE year >= 1930 AND year <=1940;" ||
  "SELECT * FROM movies WHERE year BETWEEN 1930 AND 1940;";

const ejercicio04 = "SELECT * FROM movies WHERE title ILIKE '%til%';";

const ejercicio05 = "SELECT * FROM movies WHERE array_length(actors, 1) = 1;";

const ejercicio06 =
  "SELECT title, (SELECT FLOOR(AVG(rating)) FROM UNNEST(ratings) AS rating) FROM movies;";

const ejercicio07 =
  "SELECT * FROM movies WHERE title ILIKE '%fast and%' AND year = 2016;";

module.exports = {
  ejercicio02,
  ejercicio03,
  ejercicio04,
  ejercicio05,
  ejercicio06,
  ejercicio07,
};
