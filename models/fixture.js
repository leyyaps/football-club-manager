var mongoose = require('mongoose');

var User = require('../models/user');


var fixtureSchema = new mongoose.Schema({

  opposition: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  time: { type: String, required: true, unique: true },
  home: { type: Boolean },
  ground: { type: mongoose.Schema.ObjectId, ref: 'Ground' },
  players: [{ type: mongoose.Schema.ObjectId, ref:'User' }],
  other_notes: { type: String },
  kit_duty: { type: String },
  score: { type: String },
  goal_scorers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],

});

module.exports = mongoose.model("Fixture", fixtureSchema);