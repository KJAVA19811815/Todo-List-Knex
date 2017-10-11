require("dotenv").config();

const ENV = process.env.ENV || "development";

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/lists", (req, res) => {
  knex("lists")
    .select()
    .then(function(lists) {
      res.render("lists/index", { lists: lists });
    });
});

app.get("/lists/new", (req, res) => {
  res.render("lists/new");
});

app.get("/lists/:id", (req, res) => {
  knex("lists")
    .where("id", "=", req.params.id)
    .then(function(result) {
      console.log(result);
      res.render("lists/show", { result: result });
    });
});

app.get("/lists/:id/tasks/new", (req, res) => {
  res.render("tasks/new");
});

app.post("/lists", (req, res) => {
  let name = req.body.name;

  knex("lists")
    .insert({
      name: name
    })
    .then(function(result) {
      res.redirect("/lists");
    });
});

app.listen(8080, () => {
  console.log("server at 8080");
});
