const Movie = require("../model/Movie");

exports.addMovie = async function (req, res) {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        MovieDetails: movie,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getMoviesBytitle = async function (req, res) {
  try {
    var mtitle = req.params.title.toUpperCase();
    var movie = await Movie.find({
      title: mtitle
    }).exec();
    res.status(200).json({
      status: "success movie fetched",
      exist: movie != "" ? true : false,
      data: {
        MovieDetails: movie,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "No such Movie........",
    });
  }
};

exports.getMoviesByActor = async function (req, res) {
  try {
    var mactor = req.params.actor.toUpperCase();
    var movie = await Movie.find({
      Actors: { $in: mactor}
    }).exec();
    res.status(201).json({
      status: "success",
      exist: movie != "" ? true : false,
      data: {
        MovieDetails: movie,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "No such Movie........",
    });
  }
};

exports.getMoviesByDirector = async function (req, res) {
  try {
    var mdirector = req.params.director.toUpperCase();
    var movie = await Movie.find({
      Directors: { $in: mdirector}
    }).exec();
    res.status(201).json({
      status: "success",
      exist: movie != "" ? true : false,
      data: {
        MovieDetails: movie,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "No such Movie........",
    });
  }
};

exports.getMoviesByGenre = async function (req, res) {
  try {
    var mgenre = req.params.genre.toUpperCase();
    var movie = await Movie.find({
      Genres: { $in: mgenre }
    }).exec();
    res.status(201).json({
      status: "success",
      exist: movie != "" ? true : false,
      data: {
        MovieDetails: movie,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "No such Movie........",
    });
  }
};

exports.getMovieById = async function (req, res) {
  try {
    var movie = await Movie.find({
      _id: req.params.id,
    }).exec();
    res.status(201).json({
      status: "success",
      exist: movie != "" ? true : false,
      data: {
        MovieDetails: movie,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Movie not found........",
    });
  }
};

