var express = require("express");
var router = express.Router();
var db = require("../models");

router.post("/api/reservation", function (req, res) {
    db.Reservation.create({
        name: req.body.name,
        reservationTime: Date.now(),
        cellNum: req.body.phoneNum
    }).then(function (data) {
        res.json(data);
    });
});

module.exports = router;