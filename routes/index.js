var express = require('express');
var router = express.Router();

/* GET home page. */
var homepage = function(req, res, next) {
  res.render('index', { language: req.header["zh"] });
};

router.get('/', homepage);
router.get('/index.html', homepage);

module.exports = router;
