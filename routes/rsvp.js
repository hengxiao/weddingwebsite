var express = require('express');
var router = express.Router();

/* GET RSVP page. */
var rsvppage = function(req, res, next) {
  res.render('index', { language: req.header["zh"] });
};

/* POST RSVP page. */
var rsvppost = function(req, res, next) {
    var name = req.query.name;
    var attending = req.query.attending;
    var meal1 = req.query.meal1;
    var meal2 = req.query.meal2;
    console.log("name: " + name + ", attending: " + attending +
		", meal1: " + meal1 + ", meal2: " + meal2);
    res.render('index');
}

router.get('/', rsvppost);
router.post('/', rsvppost);

module.exports = router;
console.log("rsvp loaded");
