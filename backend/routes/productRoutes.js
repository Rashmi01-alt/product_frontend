const express = require("express");
const {
  getProducts,
  getProductById,
  searchProducts,
} = require("../controllers/productController");
const router = express.Router();

router.get("/", getProducts);
/**
 * @param {id} - id of the product
 * @param {query} - search query
 * returns {data} - data of the product
 */
router.get("/search", searchProducts);
router.get("/:id", getProductById);
 
module.exports = router;
