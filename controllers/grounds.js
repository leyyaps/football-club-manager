var Ground = require('../models/ground');

function groundIndex(req, res) {
  Ground.find()
    .then(function(grounds) {
      res.status(200).json(grounds)
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function groundShow(req, res) {
  Ground.findById(req.params.id)
    .then(function(ground) {
      res.status(200).json(ground);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

module.exports = {
  index: groundIndex,
  show: groundShow
}
