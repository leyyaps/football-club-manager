var router = require('express').Router();
var jwt = require('jsonwebtoken');
var secret = require('../config/tokens').secret;
var usersController = require('../controllers/users');
var authController = require('../controllers/authentications');
var fixturesController = require('../controllers/fixtures');
var paymentController = require('../controllers/paymentController');
var groundsController = require('../controllers/grounds');

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: "You are Unauthorized" });

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, payload) {
    if(err || !payload) return res.status(401).json({ message: "Another Unauthorized" });

    req.user = payload;
    next();
  });
}

router.route('/grounds')
  .get(groundsController.index);

router.route('/grounds/:id')
  .get(groundsController.show);
  

router.route('/payment')
  .post(paymentController.payment);

router.route('/users')
  .all(secureRoute)
  .get(usersController.index)
  .post(usersController.create);

router.route('/users/:id')
  .all(secureRoute)
  .get(usersController.show)
  .put(usersController.update)
  .patch(usersController.update)
  .delete(usersController.delete);

router.route('/fixtures')
  // .all(secureRoute)
  .get(fixturesController.index)
  .post(fixturesController.create);

router.route('/fixtures/:id')
  // .all(secureRoute)
  .get(fixturesController.show)
  .put(fixturesController.update)
  .patch(fixturesController.update)
  .delete(fixturesController.delete);

router.post('/register', authController.register);
router.post('/login', authController.login);



module.exports = router;