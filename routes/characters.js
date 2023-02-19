const express = require("express");
const router = express.Router();

const axios = require("axios");

// ROUTE POUR RECUPERER LA LISTE DES PERSONNAGES

router.get("/characters", async (req, res) => {
  try {
    const name = req.query.name || "";
    // const skip = req.query.skip || "0";
    const limit = req.query.limit || "100";
    let page = req.query.page;
    // let skip = req.query.skip || 0;
    let skip = (page - 1) * limit;

    if (!page) {
      // Forcer à afficher la première page
      page = 1;
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}&skip=${skip}&limit=${limit}&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
