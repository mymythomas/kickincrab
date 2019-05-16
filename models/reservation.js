const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  name: { type: String, required: true },
  time: { type: Number, required: true },
  cellNum: { type: Number, required: true },
  madeAt: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", reservationSchema);

module.exports = Book;
