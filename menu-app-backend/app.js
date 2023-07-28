const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// import our menu database.
const menuData = require("./menuData.json");

app.get("/", (req, res) => res.send("Hello World!"));

//get all items on the menu

app.get("/menu", (req, res) => {
  try {
    res.status(200).json({ data: menuData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
