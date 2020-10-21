const express = require("express");
const routes = express.Router();

const knex = require("./database");

routes.get("/posts", async (request, response) => {
  knex("posts")
    .select("id", "message", "created_at", "updated_at")
    .orderBy("id")
    .then((post) => {
      response.json(post);
    })
    .catch((err) => response.status(404).send(err));
});

routes.get("/posts/:id", (request, response) => {
  knex("posts")
    .where({ id: request.params.id })
    .then((post) => {
      return response.json(post);
    })
    .catch((err) => response.status(400).send(err));
});

module.exports = routes;
