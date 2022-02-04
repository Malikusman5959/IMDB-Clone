const express = require("express");
const movieController = require("../controller/MovieController");
const movieRouter = express.Router();

  movieRouter
  .route("/movie")
  .post(movieController.addMovie)

  movieRouter
  .route("/movie-by-title/:title")
  .get(movieController.getMoviesBytitle);

  movieRouter
  .route("/movie-by-actor/:actor")
  .get(movieController.getMoviesByActor);

  movieRouter
  .route("/movie-by-director/:director")
  .get(movieController.getMoviesByDirector);

  movieRouter
  .route("/movie-by-genre/:genre")
  .get(movieController.getMoviesByGenre);

  movieRouter
  .route("/movie/:id")
  .get(movieController.getMovieById);

module.exports = movieRouter;
