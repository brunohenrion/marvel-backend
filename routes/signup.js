const express = require("express");
const router = express.Router();

const axios = require("axios");

router.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;

    const email = req.body.email;
    // console.log(email);
    const password = req.body.password;
    //console.log(password);

    const newsLetter = req.body.newsLetter;
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      {
        username: username,
        email: email,
        password: password,
        newsletter: newsLetter,
      }
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
