var mongoose = require('mongoose');
var User = require('../models/user');
var Fixture = require('../models/fixture');

var databaseUri = require('../config/db')('development');
mongoose.connect(databaseUri);

User.collection.drop();
Fixture.collection.drop();

User.create([
  {
    email: "andrew.smith@ipsofactouk.com",
    password: "password",
    passwordConfirmation: "password",
    firstName: "Andrew",
    lastName: "Smith",
    position: "Striker",
    address1: "Flat 12, St Ronans",
    address2: "63-65 Putney Hill",
    city: "London",
    postcode: "SW15 3NR",
    goalsScored: 15,
    isAdmin: true
  },{
   
    email: "bob@bob.com",
    password: "password",
    passwordConfirmation: "password",
    firstName: "Bob",
    lastName: "thebuilder",
    position: "Defence",
    address1: "Flat 12, St Ronans",
    address2: "63-65 Putney Hill",
    city: "London",
    postcode: "SW15 3NR",
    goalsScored: 3,
    isAdmin: false
  },{
   
    email: "dave@dave.com",
    password: "password",
    passwordConfirmation: "password",
    firstName: "Dave",
    lastName: "theRave",
    position: "Midfield",
    address1: "Flat 12, St Ronans",
    address2: "63-65 Putney Hill",
    city: "London",
    postcode: "SW15 3NR",
    goalsScored: 10,
    isAdmin: false
  }
], function(err, users) {

Fixture.create([
  {
      opposition: "Liverpool Football Club",
      date: 2009-01-06,
      time: "10:30:00",
      home: true,
      address1:"Windmill Drive",
      address2:"Clapham Common",
      city:"London",
      postcode:"SW4 9DE",
      players:["Andrew Smith", "Steven Gerrard", "David Beckham", "Philip Courtinho"],
      other_notes:"",
      kit_duty: "Richard Montague",
      score:"0-0",
      goal_scorers:"",
    }, 
    {
      opposition: "Gooners",
      date: 2010-01-06,
      time: "10:00:00",
      home: true,
      address1:"Windmill Drive",
      address2:"Clapham Common",
      city:"London",
      postcode:"SW4 9DE",
      players:["Andrew Smith", "Steven Gerrard", "David Beckham", "Philip Courtinho"],
      other_notes:"",
      kit_duty: "Steven Gerrard",
      score:"0-0",
      goal_scorers:"",

    }
  ], function(err, fixtures) {
    console.log(users);
    console.log(fixtures);
    mongoose.connection.close();

  });
})


