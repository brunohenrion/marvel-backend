const express = require("express");
const router = express.Router();

const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    const title = req.query.title || "";
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
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${title}&skip=${skip}&limit=${limit}&page=${page}`
    );
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
