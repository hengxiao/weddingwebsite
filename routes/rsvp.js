var express = require('express');
var router = express.Router();
var fs = require('fs');
var os = require('os');
//var record_file = fs.createWriteStream("/home/heng890331/wedding_record/rsvp.txt", {flags: 'a', encoding: "utf8", mode: 0666});
var record_file = fs.createWriteStream(os.homedir() + "/wedding_record/rsvp.txt", {flags: 'a', encoding: "utf8", mode: 0666});

/* GET RSVP page. */
var rsvppage = function(req, res, next) {
    res.redirect("/#rsvp");
};

/* POST RSVP page. */
var rsvppost = function(req, res, next) {
    var name = req.body.name;
    var attending = req.body.attending;
    var turf = req.body.turf;
    var surf = req.body.surf;
    var vege = req.body.vege;
    var date = new Date();
    try {
	record_file.write("name: " + name + ", attending: " + attending +
			  ", turf: " + turf + ", surf: " + surf + ", vege: " + vege + ", ");
	record_file.write("Date: " + date.toLocaleDateString() +
			  ", Time: " + date.toLocaleTimeString());
	record_file.write("\n");
    } catch (error) {
	res.status(503);
	res.send("Internal Database Error: Service unavailable for now");
	return;
    }
    res.send(JSON.stringify(req.body));
}

router.get('/', rsvppage);
router.post('/', rsvppost);

module.exports = router;
