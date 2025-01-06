

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Added required field validation (optional)
  price: { type: Number, required: true }, // Added required field validation (optional)
  description: { type: String, required: true }, // Added required field validation (optional)
  image: { type: String }, // Optional field
  category: { type: String }, // Optional field
});

module.exports = mongoose.model("Product", productSchema);

