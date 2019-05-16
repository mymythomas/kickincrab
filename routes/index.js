var express = require("express");
var router = express.Router();
var db = require("../models");

router.post("/api/reservation", function (req, res) {
    db.Reservation.create({
        name: req.body.name,
        reservationTime: req.body.reservationTime,
        cellNum: req.body.phoneNum
    }).then(function (data) {
        res.end();
    });
});

module.exports = router;