var express = require('express');
var router = express.Router();
var passport = require('passport');

// route to log in
router.get('/linkedin', passport.authenticate('linkedin'));

// route to log out
router.get('/logout', function(req, res, next){
  req.session = null
  res.redirect('/')
});

router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/' }), function(req, res, next){
  res.redirect('/')
});

module.exports = router;
