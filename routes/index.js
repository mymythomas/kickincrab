var express = require("express");
var router = express.Router();
var db = require("../models");

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
    db.Reservation.find({}).then(function (data) {
        res.json(data);
    })
})

router.post("/api/reservation", function (req, res) {
    db.Reservation.create({
        name: req.body.name,
        reservationTime: req.body.reservationTime,
        cellNum: req.body.phoneNum,
        email: req.body.email
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

module.exports = router;