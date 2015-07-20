var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about/person', {
    name: 'Cristina',
    age: 25
  });
});

router.get('/carlos', function(req, res, next) {
  res.render('about/person', {
    name: 'Carlos',
    age: 27
  });
});

module.exports = router;
