// const Product = require("../models/productModel");
// const products = require("../data/products.json");

// const getProducts = async (req, res) => {
//   res.json(products);
// };



// const searchProducts = async (req, res) => {
//   try {
//     const { query } = req.query; // Extract the query parameter

//     // Check if the query is provided
//     if (!query) {
//       return res.status(400).json({ message: "Query parameter is required" });
//     }

//     // Filter products based on the query (case insensitive)
//     const filtered = products.filter(
//       (product) =>
//         product.name.toLowerCase().includes(query.toLowerCase()) || // Match name
//         product.category.toLowerCase().includes(query.toLowerCase()) // Match category
//     );

//     // Return results if found, otherwise send a "not found" message
//     if (filtered.length === 0) {
//       return res.status(404).json({ message: "No products match your search" });
//     }

//     return res.status(200).json(filtered);
//   } catch (error) {
//     console.error("Error in searchProducts:", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const getProductById = async (req, res) => {
//   const product = products.find((p) => p.id === req.params.id);
//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ message: "Product not found" });
//   }
// };

// module.exports = { getProducts, getProductById, searchProducts };





const Product = require("../models/productModel");


// Add a new product
const addProduct = async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;

    // Validate required fields
    if (!name || !price || !description || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new product
    const product = new Product({
      name,
      price,
      description,
      image,
      category,
    });

    // Save the product to the database
    const savedProduct = await product.save();

    // Respond with the saved product
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error in addProduct:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



// Fetch all products from the database
const getProducts = async (req, res) => {
  console.log("getProducts route hit");
  try {
    const products = await Product.find();
    console.log(products);// Fetch all products
    res.status(200).json(products);
  } catch (error) {
    console.error("Error in getProducts:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Search for products in the database
const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;

    // Check if the query parameter is provided
    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    // Query the database for matching products (case insensitive)
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Match name (case insensitive)
        { category: { $regex: query, $options: "i" } }, // Match category (case insensitive)
      ],
    });

    // Return results if found, otherwise send a "not found" message
    if (products.length === 0) {
      return res.status(404).json({ message: "No products match your search" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error in searchProducts:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Fetch a specific product by its ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Query the database by ID

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error in getProductById:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getProducts, getProductById, searchProducts, addProduct };
