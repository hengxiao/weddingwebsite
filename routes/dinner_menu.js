var express = require('express');
var router = express.Router();

/* GET RSVP page. */
var dinnerpage = function(req, res, next) {
    res.render('dinner_menu');
};

router.get('/', dinnerpage);

module.exports = router;
