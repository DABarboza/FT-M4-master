const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

router.post("/character", async (req, res) => {
  try {
    const { name, gender, status, origin, species, episodes } = req.body;
    if (!name || !gender || !status || !origin || !species || !episodes) {
      return res.status(404).json({ error: "Falta enviar datos obligatorios" });
    }
    const newCharacter = await Character.create({
      name,
      gender,
      status,
      origin,
      species,
    });
    newCharacter.addEpisodes(episodes);
    return res.status(201).json(newCharacter);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res
        .status(404)
        .json({ error: "Error en alguno de los datos provistos" });
    }
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
