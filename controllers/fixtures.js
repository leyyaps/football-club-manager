var Fixture = require('../models/fixture');

function fixtureIndex(req, res) {
  Fixture.find()
    .then(function(fixtures) {
      res.status(200).json(fixtures)
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function fixtureShow(req, res) {
  Fixture.findById(req.params.id)
    .populate('ground players')
    .then(function(fixture) {
      res.status(200).json(fixture);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function fixtureCreate(req, res) {
  Fixture.create(req.body)
  .then(function(fixture) {
    return Fixture.findById(fixture._id)
      .populate('ground players');
    })
    .then(function(fixture) {
      res.status(201).json(fixture);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}



function fixtureUpdate(req, res) {
  console.log(req.body);
  Fixture.findById(req.params.id)
    .then(function(fixture) {
      for(key in req.body) fixture[key] = req.body[key];
      return fixture.save();
    })
    .then(function(fixture) {
      return Fixture.findById(fixture._id)
        .populate('ground players');
    })
    .then(function(fixture) {
      res.status(200).json(fixture);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function fixtureDelete(req, res) {
  Fixture.findById(req.params.id)
    .then(function(fixture) {
      return fixture.remove();
    })
    .then(function() {
      res.status(204).end();
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

module.exports = {
  index: fixtureIndex,
  show: fixtureShow,
  create: fixtureCreate,
  update: fixtureUpdate,
  delete: fixtureDelete
}
