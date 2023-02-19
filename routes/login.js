const express = require("express");
const router = express.Router();

const axios = require("axios");

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    // console.log(email);
    const password = req.body.password;
    //console.log(password);
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/login",
      {
        email: email,
        password: password,
      }
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
