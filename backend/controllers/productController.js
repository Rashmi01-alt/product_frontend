const Product = require("../models/productModel");
const products = require("../data/products.json");

const getProducts = async (req, res) => {
  res.json(products);
};



const searchProducts = async (req, res) => {
  try {
    const { query } = req.query; // Extract the query parameter

    // Check if the query is provided
    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    // Filter products based on the query (case insensitive)
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) || // Match name
        product.category.toLowerCase().includes(query.toLowerCase()) // Match category
    );

    // Return results if found, otherwise send a "not found" message
    if (filtered.length === 0) {
      return res.status(404).json({ message: "No products match your search" });
    }

    return res.status(200).json(filtered);
  } catch (error) {
    console.error("Error in searchProducts:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

module.exports = { getProducts, getProductById, searchProducts };
