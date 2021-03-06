const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  name: { type: String, required: true },
  reservationTime: { type: String, required: true },
  cellNum: { type: Number, required: true },
  madeAt: { type: Date, default: Date.now },
  email: { type: String, required: true },
  numInParty: { type: Number, required: true }
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
