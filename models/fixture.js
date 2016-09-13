var mongoose = require('mongoose');

var User = require('../models/user');


var fixtureSchema = new mongoose.Schema({

  opposition: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  time: { type: String, required: true, unique: true },
  home: { type: Boolean },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  postcode: {type: String },
  players:[{ type: String }],
  other_notes: {type: String },
  kit_duty: {type: String },
  score: {type: String },
  goal_scorers:[{ type: String }],

});

module.exports = mongoose.model("Fixture", fixtureSchema);