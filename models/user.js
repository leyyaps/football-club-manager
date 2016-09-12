var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var secret = require('../config/tokens').secret;
var beautifulUnique = require('mongoose-beautiful-unique-validation');

var userSchema = new mongoose.Schema({

  firstName: { type: String, required: true, unique: true },
  lastName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  mobile: { type: String, required: true },
  position: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  postcode: { type: String },
  goalsScored: { type: Number },
  isAdmin: { type: Boolean }
});

userSchema.set('toJSON', {
  transform: function(document, json) {
    delete json.passwordHash;
    delete json.__v;
    return json;
  }
});

userSchema.virtual('password')
.set(function(password) {
  this._password = password;

  this.passwordHash = bcrypt.hashSync(this._password, bcrypt.genSaltSync(8));
});

userSchema.virtual('passwordConfirmation')
.get(function() {
  return this._passwordConfirmation;
})
.set(function(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
});

userSchema.path('passwordHash')
.validate(function(passwordHash) {
  if(this.isNew) {
    if(!this._password) {
      return this.invalidate('password', 'A password is required');
    }

    if(this._password !== this._passwordConfirmation) {
      return this.invalidate('passwordConfirmation', 'Passwords do not match');
    }
  }
});
  
userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.passwordHash);
}

userSchema.plugin(beautifulUnique);

module.exports = mongoose.model("User", userSchema);