const Product = require("../models/productModel");
const products = require("../data/products.json");

const getProducts = async (req, res) => {
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

const searchProducts = async (req, res) => {
  const { query } = req.query;
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );
  res.json(filtered);
};

module.exports = { getProducts, getProductById, searchProducts };
