var express = require('express');
var router = express.Router();
var fs = require('fs');
var os = require('os');
var record_file = fs.createWriteStream("/home/heng890331/wedding_record/rsvp.txt", {flags: 'a', encoding: "utf8", mode: 0666});
//var record_file = fs.createWriteStream(os.homedir() + "/wedding_record/rsvp.txt", {flags: 'a', encoding: "utf8", mode: 0666});

/* GET RSVP page. */
var rsvppage = function(req, res, next) {
  res.render('index', { language: req.header["zh"] });
};

/* POST RSVP page. */
var rsvppost = function(req, res, next) {
    console.log(res);
    var name = req.body.name;
    var attending = req.body.attending;
    var turf = req.body.turf;
    var surf = req.body.surf;
    var vege = req.body.vege;
    try {
	record_file.write("name: " + name + ", attending: " + attending +
			  ", turf: " + turf + ", surf: " + surf + ", vege: " + vege + "\n");
    } catch (error) {
	console.log("error");
    }
    res.render('index');
}

router.post('/', rsvppost);

module.exports = router;
console.log("rsvp loaded");
