const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// IMPORT DE MES FICHIERS DE ROUTES
const comicsRoutes = require("./routes/comics");
const personnagesRoutes = require("./routes/characters");
const loginRoutes = require("./routes/login");
const signupRoutes = require("./routes/signup");

// JE DEMANDE A MON SERVEUR D'UTILISER MES ROUTES
app.use(comicsRoutes);
app.use(personnagesRoutes);
app.use(loginRoutes);
app.use(signupRoutes);

app.all("*", (req, res) => {
  res.status(400).json({ message: "cette route marvel n'existe pas" });
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
