var mongoose = require('mongoose');
var User = require('../models/user');
var Fixture = require('../models/fixture');
var Ground = require('../models/ground');
var databaseUri = require('../config/db')('development');
mongoose.connect(databaseUri);

User.collection.drop();
Fixture.collection.drop();
Ground.collection.drop();

User.create([
  {
    email: "andrew.smith@ipsofactouk.com",
    password: "password",
    passwordConfirmation: "password",
    firstName: "Andrew",
    lastName: "Smith",
    position: "Striker",
    mobile: "07800100100",
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
    mobile: "07800100100",
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
    mobile: "07800100100",
    position: "Midfield",
    address1: "Flat 12, St Ronans",
    address2: "63-65 Putney Hill",
    city: "London",
    postcode: "SW15 3NR",
    goalsScored: 10,
    isAdmin: false
  }
], function(err, users) {
console.log(err);

Ground.create([
  {
    name: "Clapham Common",
    lat: 51.459917,
    lng: -0.156230,
    postcode: "SW4 9DE"
  },
  {
    name: "Hurlingham Park",
    lat: 51.468836,
    lng: -0.202685,
    postcode: "SW6 3NG"
  },
  {
    name: "Hackney Marshes",
    lat: 51.552961,
    lng: -0.025267,
    postcode: "E9 5PF"
  }

  ],

 function(err, grounds) {
console.log(err);

Fixture.create([
  {
      opposition: "Liverpool Football Club",
      date: "2009-01-06",
      time: "10:30:00",
      home: true,
      ground: grounds[0],
      players: users,
      other_notes:"",
      kit_duty: "Richard Montague",
      score:"0-0",
      goal_scorers:[],
    }, 
    {
      opposition: "Gooners",
      date: "2010-01-06",
      time: "10:00:00",
      home: true,
      ground: grounds[1],
      players: users,
      other_notes:"",
      kit_duty: "Steven Gerrard",
      score:"0-0",
      goal_scorers:[],

    }
  ],

 function(err, fixtures){

    console.log(users);
    console.log(fixtures);
    console.log(grounds);
    mongoose.connection.close();

  });
    
  });
})


