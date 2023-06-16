var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Properties Page' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services Page' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login Page' });
});

module.exports = router;
