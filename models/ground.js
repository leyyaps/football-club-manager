var mongoose = require('mongoose');

var groundSchema = new mongoose.Schema({

  name: { type: String, required: true },
  lat: { type: Number, required: true},
  lng: { type: Number, required: true},
  postcode: { type: String, required: true }
 
});

module.exports = mongoose.model("Ground", groundSchema);