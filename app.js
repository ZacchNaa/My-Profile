//Packages
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");

const app = express();

//Template engine
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//ROUTING
app.get("/", (req, res) => {
  res.render("index");
});

//setting up server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
