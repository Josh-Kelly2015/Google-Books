const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Date, default: Date.now, required: true },
  link: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
