const mongoose = require("mongoose");

const Movie = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  year: {
    type: Number,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  Plot: {
    type: String,
    required: true,
  },

  Type: {
    type: String,
    required: true,
  },

  Actors: 
    [{
      type: String,
      required: true,
    }]
  ,

  Directors: 
    [{
      type: String,
      required: true,
    }]
  ,

  rating: {
    type: String,
    required: true,
  },
  
  votes: {
    type: Number,
    required: true,
  },

  Awards: {
    type: Number,
    required: true,
  },

  Countries: 
  [{
    type: String,
    required: true,
  }],
  
  Genres: 
  [{
    type: String,
    required: true,
  }],

  Comments: 
  [{
    Name: {
      type: String,
      required: true,
    },
    Comment: {
      type: String,
      required: true,
    }
  }],

  Image : 
  {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model("Movie", Movie);
