const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const db = require("../models");

// Sets up the email to be used to send reservation email Please no steal my PW Mymy :(
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'kickincrabtesting@gmail.com',
        pass: 'tdftl123'
    }
});

router.get("/api/allreservations", function (req, res) {
    db.Reservation.find({}, null, {sort: {reservationTime: 1}}).then(function (data) {
        res.json(data);
    })
})

router.delete("/api/delete", function (req, res) {
    console.log(req.query);
    db.Reservation.findOneAndRemove({reservationTime: req.query.reservationTime}).then(function (data) {
        res.end();
    })
})

router.post("/api/reservation", function (req, res) {
    db.Reservation.create({
        name: req.body.name,
        reservationTime: req.body.reservationTime,
        cellNum: req.body.phoneNum,
        email: req.body.email,
        numInParty: req.body.numInParty
    }).then(function (data) {
        res.end();
    });

    let message = '<p> Hello, ' + req.body.name + '!</p> <p> We have received your reservation at ' + req.body.reservationTime + '. We will send you another email once your table is ready. Please be within the area and arrive promptly when you receive your second email. To be seated your entire party must be present. The host WILL perform a headcount.</p>'
    if (parseFloat(req.body.numInParty) >= 8) {
        message += "<p>Notice: Because your party contains 8 or more people. Our policy states that an automatic service charge of 18% will be added to your tab. Please note as well that your tab may only be split up to three ways. Any further questions can be directed to your server.</p>"
    }

    transporter.sendMail({
        from: 'kickincrabtesting@gmail.com',
        to: req.body.email,
        subject: 'Your Reservation to Kickin\' Crab!',
        html: message
    });
});

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
