var mongoose = require('mongoose');
var User = require('../models/user');
var Fixture = require('../models/fixture');
var Ground = require('../models/ground');
var databaseUri = require('../config/db')(process.env.NODE_ENV || 'development');
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
   
    email: "rich@montague.com",
    password: "password",
    passwordConfirmation: "password",
    firstName: "Rich",
    lastName: "Montague",
    mobile: "07800100100",
    position: "Defence",
    address1: "Flat 12, St Ronans",
    address2: "63-65 Putney Hill",
    city: "London",
    postcode: "SW15 3NR",
    goalsScored: 3,
    isAdmin: true
  },{
   
    email: "stuart@garratt.com",
    password: "password",
    passwordConfirmation: "password",
    firstName: "Stuart",
    lastName: "Garratt",
    mobile: "07800100100",
    position: "Midfield",
    address1: "Flat 12, St Ronans",
    address2: "63-65 Putney Hill",
    city: "London",
    postcode: "SW15 3NR",
    goalsScored: 10,
    isAdmin: false
  },{
   
    email: "graeme@catlin.com",
    password: "password",
    passwordConfirmation: "password",
    firstName: "Graeme",
    lastName: "Catlin",
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
  },
  {
    name: "King Georges Park",
    lat: 51.449717,
    lng: -0.193756,
    postcode: "SW18"
  },
  {
    name: "Holland Park",
    lat: 51.500978,
    lng: -0.201533,
    postcode: "W8 6LU"
  }

  ],

 function(err, grounds) {
console.log(err);

Fixture.create([
    {
      opposition: "Park Life FC",
      date: "2016-09-17",
      time: "10:30",
      home: true,
      ground: grounds[0],
      players: [],
      other_notes:"",
      kit_duty: "Richard Montague",
      score:"0-0",
      goal_scorers:[],
    }, 
    {
      opposition: "Goonfellas FC",
      date: "2016-09-24",
      time: "10:00",
      home: false,
      ground: grounds[2],
      players: [],
      other_notes:"",
      kit_duty: "Joe Millyard",
      score:"0-0",
      goal_scorers:[],

    },
    {
      opposition: "History Old Boys",
      date: "2016-10-01",
      time: "10:30",
      home: true,
      ground: grounds[3],
      players: [],
      other_notes:"",
      kit_duty: "Andrew Smith",
      score:"0-0",
      goal_scorers:[],
    },
    {
      opposition: "The Midas Touch",
      date: "2016-10-08",
      time: "10:30",
      home: true,
      ground: grounds[1],
      players: [],
      other_notes:"",
      kit_duty: "Stuart Garratt",
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


